using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechLead.models
{
    public class Wishlist
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("wishlistName")]
        [BsonRepresentation(BsonType.String)]
        public string wishlistName { get; set; }

        [BsonElement("memberId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string memberId { get; set; }

        [BsonElement("products")]
        public List<WishlistProduct> products { get; set; }

    }
}
