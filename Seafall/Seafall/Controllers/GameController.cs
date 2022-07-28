using Microsoft.AspNetCore.Mvc;

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
        string x = "";
        try
        {
            x = System.IO.File.ReadAllText(@"ClientApp\data.json");
        }
        catch (Exception ex)
        {
            x = ex.Message;
        }


        return x;
    }
}
