using System;
using System.Collections.Generic;

namespace final_project_career_hub_app.Models;

public partial class SavedJob
{
    public int SaveId { get; set; }

    public int? UserId { get; set; }

    public int? JobId { get; set; }

    public virtual Job? Job { get; set; }
    public string? ApplicationStatus { get; internal set; }
}
