using System;
using System.Collections.Generic;

namespace final_project_career_hub_app.Models;

public partial class ApplicationStatus
{
    public int StatusId { get; set; }

    public int? UserId { get; set; }

    public int? JobId { get; set; }

    public string? Status { get; set; }

    public virtual Job? Job { get; set; }
}