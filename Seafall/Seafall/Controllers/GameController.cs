using Microsoft.AspNetCore.Mvc;
using Seafall.Services;
using System.Text.Json;

namespace Seafall.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : ControllerBase
{
    private readonly ILogger<GameController> _logger;

    public GameController(ILogger<GameController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public string Get()
    {
        return GameService.GetGame();
    }

    [HttpPost]
    public async Task<ActionResult> Post()
    {
        try
        {
            string game = "";
            using (StreamReader stream = new StreamReader(Request.Body))
            {
                game = await stream.ReadToEndAsync();
            }
            JsonDocument.Parse(game);
            GameService.SetGame(game);
            var x = GameService.GetGame();
            return Accepted();
        }
        catch
        {
            return  StatusCode(StatusCodes.Status415UnsupportedMediaType, "This endpoint requires a JSON string.");
        }
    }

    //[Route("Game/Upload/{Game}")]
    //public ActionResult Upload(string Game)
    //{
    //    try
    //    {
    //        JsonDocument.Parse(Game);
    //        GameService.SetGame(Game);
    //        return Accepted();
    //    }
    //    catch
    //    {
    //        return StatusCode(StatusCodes.Status415UnsupportedMediaType, "This endpoint requires a JSON string.");
    //    }
    //}
}
