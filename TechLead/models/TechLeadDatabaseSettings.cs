using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechLead.models
{
    public class TechLeadDatabaseSettings : ITechLeadDatabaseSettings
    {
        public string MembersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface ITechLeadDatabaseSettings
    {
        string MembersCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
