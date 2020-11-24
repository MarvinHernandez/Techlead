using TechLead.models;
using TechLead.services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;

namespace TechLead.Controllers
{
    [EnableCors("AnotherPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        private readonly MemberService _memberService;

        public MembersController(MemberService memberService)
        {
            _memberService = memberService;
        }

        [HttpGet]
        public ActionResult<List<Member>> Get()
        { 
            var members = _memberService.Get();
            int degug = 0;
            return members;
        }
            //_memberService.Get();

        [HttpGet("{id}", Name = "GetMember")]
        public ActionResult<Member> Get(string id)
        {
            var member = _memberService.Get(id);

            if (member == null)
            {
                return NotFound();
            }

            return member;
        }

        [HttpPost]
        public ActionResult<Member> Create(Member member)
        {
            _memberService.Create(member);

            return CreatedAtRoute("GetMember", new { id = member.Id.ToString() }, member);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Member memberIn)
        {
            var member = _memberService.Get(id);

            if (member == null)
            {
                return NotFound();
            }

            _memberService.Update(id, memberIn);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var member = _memberService.Get(id);

            if (member == null)
            {
                return NotFound();
            }

            _memberService.Remove(member.Id);

            return NoContent();
        }
    }
}
