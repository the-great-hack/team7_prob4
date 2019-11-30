using Engine.AddOns;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Engine.Models.Infrastructure
{
    [SeedableAttribute]
    public class User : NamedAuditInfo
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }

        public int Age
        {
            get
            {
                //ignoring null & edge cases due to time constraints
                int todaysDate = int.Parse(DateTime.Now.ToString("yyyyMMdd"));
                int dateOfBirth = int.Parse(DOB.ToString("yyyyMMdd"));
                return (todaysDate - dateOfBirth) / 10000;
            }
        }
        public string LastKnownLocation { get; set; } //ignoring coordinates for now

        public bool IsInactive { get; set; }
        public DateTime LastLogin { get; set; }

    }
}