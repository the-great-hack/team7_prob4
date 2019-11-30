using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Engine.Models.Application;
using Engine.Models.Infrastructure;

namespace Engine.DataFactory
{
    public class DataStore
    {
        private static readonly object threadLock = new object();
        private DataStore()
        {
        }
        private static DataStore instance = null;
        public IEnumerable<LookupCategory> LookupCategories { get; set; }
        public IEnumerable<Lookup> Lookups { get; set; }
        public IEnumerable<Item> Items { get; set; }
        public IEnumerable<Restaurant> Restaurants { get; set; }
        public IEnumerable<OrderItem> OrderItems { get; set; }
        public IEnumerable<Category> Categories { get; set; }
        public IEnumerable<Order> Orders { get; set; }
        public static DataStore Instance
        {
            get
            {
                lock (threadLock)
                {
                    if (instance == null)
                    {
                        instance = new DataStore();
                        var seeder = new Seeder();
                        seeder.StartSeeding();
                    }
                    return instance;
                }
            }
        }
         
    }
     
}