using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;
using CsvHelper;
using Engine.AddOns;
using Engine.Models.Application;
using Engine.Models.Infrastructure;

namespace Engine.DataFactory
{
    public class Seeder
    {
        #region ctor 

        private readonly IEnumerable<Type> _seedableModels;
        private const string FILE_EXTENSION = ".csv";
        public Seeder()
        {
            _seedableModels = getSeedableModels();
        }
        #endregion
        #region Public Methods

        public bool StartSeeding()
        {
            try
            {
                Assembly assembly = Assembly.GetExecutingAssembly();
                string assemblyPath = System.IO.Path.GetDirectoryName(assembly.Location);

                foreach (var seedableModel in _seedableModels)
                { 
                    //var qualifiedFilePath = Path.Combine(assemblyPath, $"{seedableModel.Name}{FILE_EXTENSION}");
                    var qualifiedFilePath = Path.Combine("G:\\Development\\Careem\\SampleData\\", $"{seedableModel.Name}{FILE_EXTENSION}");
                    if (File.Exists(qualifiedFilePath))
                    {
                        using (var streamReader = new StreamReader(qualifiedFilePath))
                        using (var csvReader = new CsvReader(streamReader))
                        {
                            /* below code can be further improved by making GetRecords more generic
                             like current seedableModel is Item and Datastore is filled with items automatically
                             without if conditions */

                            if (typeof(Item) == seedableModel)
                            {
                                DataStore.Instance.Items = csvReader.GetRecords<Item>().ToList();
                            }
                            else if (typeof(Restaurant) == seedableModel)
                            {
                                DataStore.Instance.Restaurants = csvReader.GetRecords<Restaurant>().ToList();
                            }
                            else if (typeof(OrderItem) == seedableModel)
                            {
                                DataStore.Instance.OrderItems = csvReader.GetRecords<OrderItem>().ToList();
                            }
                            else if (typeof(Lookup) == seedableModel)
                            {
                                DataStore.Instance.Lookups = csvReader.GetRecords<Lookup>().ToList();
                            }
                            else if (typeof(LookupCategory) == seedableModel)
                            {
                                DataStore.Instance.LookupCategories = csvReader.GetRecords<LookupCategory>().ToList();
                            }
                            else if (typeof(Order) == seedableModel)
                            {
                                DataStore.Instance.Orders = csvReader.GetRecords<Order>().ToList();
                            }
                            else if (typeof(Category) == seedableModel)
                            {
                                DataStore.Instance.Categories = csvReader.GetRecords<Category>().ToList();
                            }

                        }
                    }

                }
                 
                return true;
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
            }

            return false;
        }
        public T CastExamp1<T>(object input)
        {
            return (T)input;
        }
        #endregion

        #region Private Methods 
         
        private IEnumerable<System.Type> getSeedableModels()
        {
            try
            {
                var seedableTypes =
                    from assembly in AppDomain.CurrentDomain.GetAssemblies()
                    from type in assembly.GetTypes()
                    let attributes = type.GetCustomAttributes(typeof(SeedableAttribute), true)
                    where attributes != null && attributes.Length > 0
                    select type;
                return seedableTypes;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        #endregion
    }


}