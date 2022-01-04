using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.Model
{
    public class Branch
    {
        [Key]
        public int BranchID { get; set; }
        public string BranchName { get; set; }
        public string BranchDivision { get; set; }
        public virtual ICollection<Employer> Employers { get; set; }
    }
}
