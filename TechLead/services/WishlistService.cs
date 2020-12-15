using MongoDB.Driver;
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

        //public Wishlist Create(Wishlist wishlist)
        //{
        //    _wishlists.InsertOne(wishlist);
        //    return wishlist;
        //}

        public int Create(Wishlist wishlist)
        {
            try
            {
                _wishlists.InsertOne(wishlist);
                return 1;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return 0;
            }
            return 0;

        }

        public void Update(string id, Wishlist wishlist) =>
            _wishlists.ReplaceOne(wishlist => wishlist.Id == id, wishlist);

        public int Update(string id, string productId, string productType) {

            var testfilter = Builders<Wishlist>.Filter.ElemMatch(x => x.products, x => x.productID == productId);
            var res =  _wishlists.Find(testfilter).FirstOrDefault();
            if (res == null)
            {
                WishlistProduct newProd = new WishlistProduct();
                newProd.productID = productId;
                newProd.productType = productType;
                var filter = Builders<Wishlist>.Filter.Eq(e => e.Id, id);
                var update = Builders<Wishlist>.Update.Push<WishlistProduct>(e => e.products, newProd);
                var result = _wishlists.FindOneAndUpdateAsync(filter, update);
                return 1;
            }
            return 0;
        }

        public int Remove(Wishlist wishlist)
        {
            int res = 0;
            try
            {
             _wishlists.DeleteOne(wish => wish.Id == wishlist.Id);
                res = 1;

            }
            catch (Exception ex)
            {
                return res;
                throw;
            }
            return res;

        }

        public void Remove(string id) =>
            _wishlists.DeleteOne(wishlist => wishlist.Id == id);

        public int Remove(string id, string productId) {
            var testfilter = Builders<Wishlist>.Filter.ElemMatch(x => x.products, x => x.productID == productId);
            var res = _wishlists.Find(testfilter).FirstOrDefault();
            if (res != null)
            {
                var update = Builders<Wishlist>.Update.PullFilter(wl => wl.products, wlp => wlp.productID == productId);
                var result = _wishlists.FindOneAndUpdateAsync(p => p.Id == id, update).Result;
                
                return 1;
            }
            return 0;
        }
    }
}
