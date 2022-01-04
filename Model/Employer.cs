using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.Model
{
    public class Employer
    {
        [Key]
        public int EmployerID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public DateTime JoiningDate { get; set; }
        public bool IsActive { get; set; }
        public int BranchID { get; set; }
        public virtual Branch Branch { get; set; }
    }
}
