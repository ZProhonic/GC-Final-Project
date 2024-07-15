using final_project_career_hub_app.Models;
using Microsoft.EntityFrameworkCore;

namespace final_project_career_hub_app.DAL
{
    public class SavedJobRepository
    {
        private readonly JobsDbContext _context;

        public SavedJobRepository(JobsDbContext context)
        {
            _context = context;
        }

        public List<SavedJob> GetAllSavedJobs()
        {
            return _context.SavedJobs.Include(s => s.Job).ToList();
        }

        public SavedJob GetSavedJobById(int saveId)
        {
            return _context.SavedJobs.Include(s => s.Job).FirstOrDefault(s => s.SaveId == saveId);
        }

        public void AddSavedJob(SavedJobCreationDto savedJobDto)
        {
            var savedJob = new SavedJob
            {
                UserId = savedJobDto.UserId,
                JobId = savedJobDto.JobId,
                ApplicationStatus = savedJobDto.ApplicationStatus
            };

            _context.SavedJobs.Add(savedJob);
            _context.SaveChanges();
        }

        public void UpdateSavedJob(SavedJob savedJob)
        {
            _context.SavedJobs.Update(savedJob);
            _context.SaveChanges();
        }

        public void DeleteSavedJob(int saveId)
        {
            var savedJob = GetSavedJobById(saveId);
            if (savedJob != null)
            {
                _context.SavedJobs.Remove(savedJob);
                _context.SaveChanges();
            }
        }
    }
}


