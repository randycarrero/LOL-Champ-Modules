using Games.LeagueOfLegends.ChampionModules.Common;
using Games.LeagueOfLegends.Model;
using LedDashboardCore;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Games.LeagueOfLegends.ChampionModules
{
    [Champion(CHAMPION_NAME)]
    public sealed class XerathModule : ChampionModule
    {
        public const string CHAMPION_NAME = 
        - "Xerath";
        // Variables

        // Champion-specific Variables
        int rTimeRemaining = 0;
        int chargesRemaining = 0;
        bool castingQ;

        HSVColor BlueExplodeColor = new HSVColor(0.59f, 1, 1);

        public int MaxRCasts => GameState.ActivePlayer.Abilities.R_Level + 2;

        public XerathModule(GameState gameState, AbilityCastPreference preferredCastMode)
            : base(CHAMPION_NAME, gameState, preferredCastMode, true)
        {
            // Initialization for the champion module occurs here.
        }

        protected override AbilityCastMode GetQCastMode() => AbilityCastMode.Normal();
        protected override AbilityCastMode GetWCastMode() => AbilityCastMode.Normal();
        protected override AbilityCastMode GetECastMode() => AbilityCastMode.Normal();
        protected override AbilityCastMode GetRCastMode() => AbilityCastMode.Normal();

        protected override void OnMouseClick(object s, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right && chargesRemaining > 0)
            {
                int finalCooldown = GetCooldownForAbility(AbilityKey.R);
                if (chargesRemaining == MaxRCasts)
                {
                    finalCooldown /= 2;
                }
                StartCooldownTimer(AbilityKey.R, finalCooldown);
                CancelRecast(AbilityKey.R);
                RunAnimationOnce("q_retract", LightZone.Desk, timeScale: 0.6f);
                chargesRemaining = 0;
            }
        }

        /// 

        /// Called when the game state is updated
        /// 
        private void OnGameStateUpdated(GameState state)
        {
            AbilityCastModes[AbilityKey.R].MaxRecasts = MaxRCasts;
        }

        protected override async Task OnCastQ()
        {
            castingQ = true;
            RunAnimationOnce("q_charge", LightZone.Desk, timeScale: 0.3f);
            if (castingQ) // we need to check again after playing last anim
                Animator.HoldColor(BlueExplodeColor, LightZone.Desk, 1.5f);
            if (castingQ)
            {
                RunAnimationOnce("q_retract", LightZone.Desk, timeScale: 0.6f);
                castingQ = false;
            }
        }
        protected override async Task OnCastW()
        {
            await Task.Delay(100);
            RunAnimationOnce("w_cast", LightZone.Desk, 1000, timeScale: 1f);
            //await Task.Delay(1000);
            Animator.ColorBurst(HSVColor.White, LightZone.Desk);
        }
        protected override async Task OnCastE()
        {
            await Task.Delay(100);
            RunAnimationOnce("e_cast", LightZone.Keyboard, timeScale: 0.5f);
        }
        protected override async Task OnCastR()
        {
            RunAnimationOnce("r_open", LightZone.All, timeScale: 0.23f);
            StartRTimer();
            await Task.Delay(500);
            if (chargesRemaining == 3)
            {
                Animator.HoldColor(HSVColor.White, LightZone.All, 10000);
            }
        }

        private async Task StartRTimer()
        {
            chargesRemaining = MaxRCasts;

            await Task.Delay(10000);

            if (chargesRemaining > 0)
            {
                Animator.StopCurrentAnimation();
            }
            chargesRemaining = 0;
        }

        protected override async Task OnRecastQ()
        {
            castingQ = false;
            RunAnimationOnce("q_retract", LightZone.Desk, timeScale: 0.6f);
            await Task.Delay(300);
            Animator.ColorBurst(BlueExplodeColor, LightZone.Desk, 0.8f);
        }
        protected override async Task OnRecastR()
        {
            if (chargesRemaining == 0)
            {
                return;
            }

            chargesRemaining--;
            RunAnimationOnce("r_launch", LightZone.All, timeScale: 0.4f);
            await Task.Delay(700);

            if (chargesRemaining > 0)
            {
                int previousCharges = chargesRemaining;
                Animator.ColorBurst(BlueExplodeColor, LightZone.All, 0.8f, destinationColor: HSVColor.White);
                if (previousCharges == chargesRemaining)
                {
                    Animator.HoldColor(HSVColor.White, LightZone.All, rTimeRemaining);
                }
            }
            else if (chargesRemaining == 0)
            {
                Animator.ColorBurst(BlueExplodeColor, LightZone.All, 1.2f);
            }
        }
    }
}