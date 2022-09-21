using Microsoft.AspNetCore.Mvc;
using Seafall.Models;
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
            return Accepted();
        }
        catch
        {
            return  StatusCode(StatusCodes.Status415UnsupportedMediaType, "This endpoint requires a JSON string.");
        }
    }

    [Route("Milestones")]
    public string Milestones()
    {
        List<Milestone> milestones = new List<Milestone>();
        milestones.Add(new Milestone("The End is the Beginning", "Find the island at the end of the world.This will name an Emperor.", 12, "Available"));
        milestones.Add(new Milestone("Clad in Marble", "Have five structures.", 4, "Available"));
        //milestones.Add(new Milestone("Birth of an Empire", "Have three active colonies.", 4, "Available"));
        milestones.Add(new Milestone("Power of the Ancients", "Have two relics.", 3, "Available"));
        //milestones.Add(new Milestone("The Ancient Capital Razed", "Conquer the Ancient City of Ker.", 4, "Available"));
        milestones.Add(new Milestone("The Temple Falls", "Successfully raid the temple on Tortosa.", 5, "Available"));
        milestones.Add(new Milestone("The Temple Reborn", "Build the Temple on a build site you control.", 5, "Available"));
        //milestones.Add(new Milestone("Faces to the Whispers", "Have five advisors in your council room with your enmity on them.", 2, "Available"));
        milestones.Add(new Milestone("The Secret of Bronze", "Discover the secret of the bronze statue.", 6, "Available"));
        milestones.Add(new Milestone("The Secret of Silver", "Discover the secret of the silver statue.", 6, "Available"));
        milestones.Add(new Milestone("The Secret of Gold", "Discover the secret of the gold statue.", 6, "Available"));
        milestones.Add(new Milestone("The Masques Have Fallen", "Find a chart to the island at the end of the world.", 2, "Available"));
        return JsonSerializer.Serialize(milestones);
    }
}
