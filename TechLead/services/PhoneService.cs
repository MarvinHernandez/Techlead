using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechLead.models;

namespace TechLead.services
{
    public class PhoneService
    {
        private readonly IMongoCollection<phones> _phones;

        public PhoneService(ITechLeadDatabaseSettings settings)
        {
            try
            {
                var client = new MongoClient(settings.ConnectionString);
                var database = client.GetDatabase(settings.DatabaseName);

                _phones = database.GetCollection<phones>(settings.PhoneCollectionName);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex);
            }

        }
        public List<phones> Get() => _phones.Find(p => true).ToList();
        public phones Get(string Name) => _phones.Find<phones>(l => l.Name == Name).FirstOrDefault();
        
        public phones GetById(string id)
        {
            try
            {
                phones phone = null;
                foreach (var _phone in Get())
                {
                    if(_phone.Id == id)
                    {
                        phone = _phone;
                    }
                }
                //phone = _phones.Find<phones>((p) =>(p.Id == id.TrimEnd())).FirstOrDefault();
                return phone;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
