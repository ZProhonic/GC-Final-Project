﻿namespace final_project_career_hub_app.Models
{
    public class SavedJobUpdateDto
    {
        public int? UserId { get; set; }

        public int? JobId { get; set; }

        public string? ApplicationStatus { get; set; }
    }
}
