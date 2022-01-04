using Employee.Data;
using Employee.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.Controllers
{
    [Route("/api/employers")]
    public class EmployerController : Controller
    {
        private readonly MyDbContext context;
        public EmployerController(MyDbContext context)
        {
            this.context = context;

        }

        [HttpGet]
        public async Task<IEnumerable<Employer>> GetEmployers()
        {
            var trn = await context.Employers.ToListAsync();
            return trn;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployer(int id)
        {
            var employer = await context.Employers.FindAsync(id);
            if (employer == null)
            {
                return NotFound();
            }
            return Ok(employer);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEmployer([FromBody] Employer employer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            context.Employers.Add(employer);
            await context.SaveChangesAsync();
            return Json(employer);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployer([FromBody] Employer employer, int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var employerr = await context.Employers.FindAsync(id);
            if (employerr != null)
            {
                employerr.Name = employer.Name;
                employerr.Email = employer.Email;
                employerr.Address = employer.Address;
                employerr.JoiningDate = employer.JoiningDate;
                employerr.IsActive = employer.IsActive;
                employerr.BranchID = employer.BranchID;
            }
            await context.SaveChangesAsync();
            return Ok(employerr);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployer(int id)
        {
            var employer = await context.Employers.FindAsync(id);
            if (employer == null)
            {
                return NotFound();
            }
            context.Remove(employer);
            await context.SaveChangesAsync();
            return Ok(id);
        }

        [HttpGet]
        [Route("GetBranchList")]
        public IEnumerable<Branch> GetBranch()
        {
            List<Branch> lstBranch = new List<Branch>();
            lstBranch = (from BranchList in context.Branches select BranchList).ToList();
            return lstBranch;
        }

    }
}
