using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Engine.Models.Infrastructure
{
    public class NamedAuditInfo : NamedInfo
    {
        public virtual string CreatedBy { get; set; }
        public virtual DateTime CreatedOn { get; set; }
        public virtual string ModifiedBy { get; set; }
        public virtual DateTime? ModifiedOn { get; set; }
    }
}