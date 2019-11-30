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
                    var qualifiedFilePath = Path.Combine(assemblyPath, $"{seedableModel.Name}{FILE_EXTENSION}");
                    if (File.Exists(qualifiedFilePath))
                    {
                        using (var streamReader = new StreamReader(Path.Combine(assemblyPath, $"{seedableModel.Name}{FILE_EXTENSION}")))
                        using (var csvReader = new CsvReader(streamReader))
                        { 
                            if (typeof(Lookup) == seedableModel)
                            {
                                var modelContents = csvReader.GetRecords<Lookup>();
                            }
                            else if (typeof(OrderItem) == seedableModel)
                            {
                                var modelContents = csvReader.GetRecords<OrderItem>();
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