namespace Seafall.Services
{
    public class GameService
    {
        public static string Game = "";

        private static GameService _gameService = new GameService();

        private GameService() { }

        public static GameService GetGameService() => _gameService;

        public static void SetGame(string game)
        {
            GameService.Game = game;
        }

        public static string GetGame() { return GameService.Game; }
    }
}
