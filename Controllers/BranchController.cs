using Employee.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Employee.Model;
using Microsoft.EntityFrameworkCore;

namespace Employee.Controllers
{
    [Route("/api/branches")]
    public class BranchController : Controller
    {
        private readonly MyDbContext context;
        public BranchController(MyDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<IEnumerable<Branch>> GetBranches()
        {
            var branch = await context.Branches.ToListAsync();
            return branch;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBranch(int id)
        {
            var branch = await context.Branches.FindAsync(id);
            if (branch == null)
            {
                return NotFound();
            }
            return Ok(branch);
        }
        [HttpPost]
        public async Task<IActionResult> CreateBranch([FromBody] Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            context.Branches.Add(branch);
            await context.SaveChangesAsync();
            return Json(branch);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBranch([FromBody] Branch branch, int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var brnch = await context.Branches.FindAsync(id);
            if (brnch != null)

            {
                brnch.BranchName = branch.BranchName;
                brnch.BranchDivision = branch.BranchDivision;

            }
            await context.SaveChangesAsync();
            return Ok(brnch);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBranch(int id)
        {
            var branch = await context.Branches.FindAsync(id);
            if (branch == null)
            {
                return NotFound();
            }
            context.Remove(branch);
            await context.SaveChangesAsync();
            return Ok(id);
        }
    }
}
