using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechLead.models
{
    public class TechLeadDatabaseSettings : ITechLeadDatabaseSettings
    {
        public string MembersCollectionName { get; set; }
        public string WishlistCollectionName { get; set; }
        public string PcCollectionName { get; set; }
        public string LaptopsCollectionName { get; set; }
        public string PhoneCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface ITechLeadDatabaseSettings
    {
        string MembersCollectionName { get; set; }
        string WishlistCollectionName { get; set; }
        string PcCollectionName { get; set; }
        public string LaptopsCollectionName { get; set; }
        public string PhoneCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
