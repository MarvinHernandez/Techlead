using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TechLead.models;

namespace TechLead.services
{
    public class LoginService
    {
        private readonly ITechLeadDatabaseSettings _settings;

        public LoginService(ITechLeadDatabaseSettings settings)
        {
            _settings = settings;
        }

        public string GenerateJSONWebToken(Member userInfo, IConfiguration _config)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public Member AuthenticateUser(Member login)
        {
            Member user = null;

            MemberService ms = new MemberService(_settings);
            user = ms.GetByUsername(login.username);

            if (user != null)
            {
                if (login.password == user.password)
                {
                    user = login;
                }
            }

            //debug
            //if (login.username == "Yuliia")
            //{
            //    user = new Member { username = "Yuliia Holovatenko", password = "password123" };
            //}
            return user;
        }
    }
}
