using System;
using System.Collections.Generic;

namespace final_project_career_hub_app.Models;

public partial class Job
{
    public int JobId { get; set; }

    public string? JobTitle { get; set; }

    public string? CompanyName { get; set; }

    public string? Location { get; set; }

    public string? ZipCode { get; set; }

    public string? SalaryRange { get; set; }

    public string? JobDescription { get; set; }

    public string? ExperienceLevel { get; set; }

    public virtual ICollection<ApplicationStatus> ApplicationStatuses { get; set; } = new List<ApplicationStatus>();

    public virtual ICollection<SavedJob> SavedJobs { get; set; } = new List<SavedJob>();
}
