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

        [HttpGet("{id}", Name = "GetWishlist")]
        public ActionResult<Wishlist> Get(string id)
        {
            var Wishlist = _wishlistService.Get(id);

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
    }
}