using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechLead.models
{
    public class WishlistProduct
    {
        [BsonElement("productID")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string productID { get; set; }

        [BsonElement("productType")]
        [BsonRepresentation(BsonType.String)]
        public string productType { get; set; }
    }
}
