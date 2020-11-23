using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechLead.models;

namespace TechLead.services
{
    public class LaptopService
    {
        private readonly IMongoCollection<laptops> _laptops;

        public LaptopService(ITechLeadDatabaseSettings settings)
        {
            try
            {
                var client = new MongoClient(settings.ConnectionString);
                var database = client.GetDatabase(settings.DatabaseName);

                _laptops = database.GetCollection<laptops>(settings.LaptopsCollectionName);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex);

            }

        }
        public List<laptops> Get() => _laptops.Find(p => true).ToList();
        public laptops Get(string Name) => _laptops.Find<laptops>(l => l.Name == Name).FirstOrDefault();
    }
}
