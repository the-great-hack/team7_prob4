using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Engine.Models.Infrastructure;

namespace Engine.DataFactory
{
    public static class LookupsData
    {
        public static IEnumerable<LookupCategory> GetCategories()
        {
            return new List<LookupCategory>
            {
                new LookupCategory
                {
                    ID = 1,
                    Code = "",
                    CreatedBy = "DB",
                    CreatedOn = DateTime.Now,
                    Description = "Test Description",
                    IsDeleted = false,
                    Name = "",
                    ModifiedBy = "DB"
                },
            };
        }
        public static IEnumerable<Lookup> GetLookups()
        {
            return new List<Lookup>
            {
                new Lookup
                {
                    ID = 1,
                    Code = "",
                    CreatedBy = "DB",
                    CreatedOn = DateTime.Now,
                    Description = "Test Description",
                    IsDeleted = false,
                    Name = "",
                    ModifiedBy = "DB",
                    LookupCategoryID = 1,
                },
                new Lookup
                {
                    ID = 1,
                    Code = "",
                    CreatedBy = "DB",
                    CreatedOn = DateTime.Now,
                    Description = "Test Description",
                    IsDeleted = false,
                    Name = "",
                    ModifiedBy = "DB",
                    LookupCategoryID = 1,
                },
            };
        }
    }
}