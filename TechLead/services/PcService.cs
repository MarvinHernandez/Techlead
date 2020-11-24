using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechLead.models;

namespace TechLead.services
{
    public class PcService
    {
        private readonly IMongoCollection<pc> _pcs;

        public PcService(ITechLeadDatabaseSettings settings)
        {
            try
            {
                var client = new MongoClient(settings.ConnectionString);
                var database = client.GetDatabase(settings.DatabaseName);

                _pcs = database.GetCollection<pc>(settings.PcCollectionName);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex);

            }

        }
        public List<pc> Get() =>_pcs.Find(p => true).ToList();
        public pc Get(string nName) =>_pcs.Find<pc>(p => p.NickName == nName).FirstOrDefault();
        public pc GetById(string id) =>
            _pcs.Find<pc>(pc => pc.Id == id).FirstOrDefault();
    }
}
