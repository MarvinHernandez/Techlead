﻿using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechLead.models;

namespace TechLead.services
{
    public class WishlistService
    {
        private readonly IMongoCollection<Wishlist> _wishlists;

        public WishlistService(ITechLeadDatabaseSettings settings)
        {
            try
            {
                var client = new MongoClient(settings.ConnectionString);
                var database = client.GetDatabase(settings.DatabaseName);

                _wishlists = database.GetCollection<Wishlist>(settings.WishlistCollectionName);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex);

            }

        }

        public List<Wishlist> Get() =>
            _wishlists.Find(wishlist => true).ToList();

        public Wishlist Get(string id) =>
            _wishlists.Find<Wishlist>(wishlist => wishlist.Id == id).FirstOrDefault();

        public List<Wishlist> GetByMemberId(string memberID) =>
            _wishlists.Find<Wishlist>(wishlist => wishlist.memberId == memberID).ToList();

        public Wishlist Create(Wishlist wishlist)
        {
            _wishlists.InsertOne(wishlist);
            return wishlist;
        }

        public void Update(string id, Wishlist wishlist) =>
            _wishlists.ReplaceOne(wishlist => wishlist.Id == id, wishlist);

        public void Update(string id, string productId, string productType) {
            WishlistProduct newProd = new WishlistProduct();
            newProd.productID = productId;
            newProd.productType = productType;
            var filter = Builders<Wishlist>.Filter.Eq(e => e.Id, id);
            var update = Builders<Wishlist>.Update.Push<WishlistProduct>(e => e.products, newProd);
            var result =  _wishlists.FindOneAndUpdateAsync(filter, update);
        }

        public void Remove(Wishlist wishlist) =>
            _wishlists.DeleteOne(wishlist => wishlist.Id == wishlist.Id);

        public void Remove(string id) =>
            _wishlists.DeleteOne(wishlist => wishlist.Id == id);

        public void Remove(string id, string productId) {
            var update = Builders<Wishlist>.Update.PullFilter(wl => wl.products,
                                                wlp => wlp.productID == productId);
            var result = _wishlists.FindOneAndUpdateAsync(p => p.Id == id, update).Result;
        }
    }
}
