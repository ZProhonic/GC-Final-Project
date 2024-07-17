using final_project_career_hub_app.Models;
using Microsoft.EntityFrameworkCore;
namespace final_project_career_hub_app.DAL
{
	public class JobRepository
	{
		private readonly JobsDbContext _context;
		public JobRepository(JobsDbContext jobDbContext)
		{
			_context = jobDbContext;
		}
		
		public async Task<IEnumerable<JobDto>> GetAllJobsAsync()
		{
			return await _context.Jobs.Select(j => new JobDto
			{
				JobId = j.JobId,
				JobTitle = j.JobTitle,
				CompanyName = j.CompanyName,
				Location = j.Location,
				SalaryRange = j.SalaryRange,
				JobDescription = j.JobDescription,
				ExperienceLevel = j.ExperienceLevel
			}).ToListAsync();
		}
		public async Task<JobDto> GetJobByIdAsync(int id) 
		{
			var job = await _context.Jobs.FindAsync(id);
			if (job== null)
			{
				return null;
			}
			return new JobDto
			{
				JobId = job.JobId,
				JobTitle = job.JobTitle,
				CompanyName = job.CompanyName,
				Location = job.Location,
				SalaryRange = job.SalaryRange,
				JobDescription = job.JobDescription,
				ExperienceLevel = job.ExperienceLevel
			};
		}
		public async Task<IEnumerable<Job>> SearchJobsAsync(string? jobTitle, string? companyName, string? location, string? keyWords)
		{
			var query = _context.Jobs.AsQueryable();

			if (!string.IsNullOrEmpty(jobTitle))
			{
				query = query.Where(j => j.JobTitle.Contains(jobTitle));
			}

			if (!string.IsNullOrEmpty(companyName))
			{
				query = query.Where(j => j.CompanyName.Contains(companyName));
			}

			if (!string.IsNullOrEmpty(location))
			{
				query = query.Where(j => j.Location.Contains(location));
			}

			if (!string.IsNullOrEmpty(keyWords))
			{
				query = query.Where(j => j.JobDescription.Contains(keyWords));
			}

			return await query.ToListAsync();
		}
		

	}
}
