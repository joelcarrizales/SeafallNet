namespace Seafall.Models;

public class Milestone
{
    public string name { get; set; }
    public string requirement { get; set; }
    public int glory { get; set; }
    public string status { get; set; }

    public Milestone(string name, string requirement, int glory, string status)
    {
        this.name = name;
        this.requirement = requirement;
        this.glory = glory;
        this.status = status;
    }
}
