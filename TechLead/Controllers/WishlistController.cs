using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using TechLead.models;
using TechLead.services;

namespace TechLead.Controllers
{
    [EnableCors("AnotherPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class WishlistController : Controller
    {
        private readonly WishlistService _wishlistService;

        public WishlistController(WishlistService WishlistService)
        {
            _wishlistService = WishlistService;
        }

        [HttpGet]
        public ActionResult<List<Wishlist>> Get() =>
            _wishlistService.Get();

        //[HttpGet("{id}", Name = "GetWishlist")]
        [HttpGet("{id}")]
        public ActionResult<List<Wishlist>> Get(string id)
        {
            var Wishlist = _wishlistService.GetByMemberId(id);

            if (Wishlist == null)
            {
                return NotFound();
            }

            return Wishlist;
        }

        [HttpPost]
        public ActionResult<Wishlist> Create(Wishlist Wishlist)
        {
            _wishlistService.Create(Wishlist);

            return CreatedAtRoute("GetWishlist", new { id = Wishlist.Id.ToString() }, Wishlist);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Wishlist WishlistIn)
        {
            var Wishlist = _wishlistService.Get(id);

            if (Wishlist == null)
            {
                return NotFound();
            }

            _wishlistService.Update(id, WishlistIn);

            return NoContent();
        }

        [HttpPut("{id}/{productId}/{productType}")]
        public IActionResult Update(string id, string productId, string productType)
        {
            var Wishlist = _wishlistService.Get(id);

            if (Wishlist == null)
            {
                return NotFound();
            }

            int res = _wishlistService.Update(id, productId, productType);
            if (res == 0)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var Wishlist = _wishlistService.Get(id);

            if (Wishlist == null)
            {
                return NotFound();
            }

            _wishlistService.Remove(Wishlist.Id);

            return NoContent();
        }

        [HttpDelete("{id}/{productId}")]
        public ActionResult<int> Delete(string id, string productId)
        {
            int res = 0;
            res = _wishlistService.Remove(id, productId);

            return res;
        }
    }
}