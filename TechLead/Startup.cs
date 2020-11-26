using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using TechLead.models;
using TechLead.services;


namespace TechLead
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = Configuration["Jwt:Issuer"],
                    ValidAudience = Configuration["Jwt:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
                };
            });
            //services.AddMvc();

            services.AddCors(options =>
            {
                options.AddPolicy("AnotherPolicy",
                                builder =>
                                {
                                    builder.WithOrigins("http://localhost:4200")
                                                        .AllowAnyHeader()
                                                        .AllowAnyMethod();
                                });
            });

            // requires using Microsoft.Extensions.Options
            services.Configure<TechLeadDatabaseSettings>(
                Configuration.GetSection(nameof(TechLeadDatabaseSettings)));

            services.AddSingleton<ITechLeadDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<TechLeadDatabaseSettings>>().Value);

            services.AddSingleton<MemberService>();
            services.AddSingleton<LoginService>();
            services.AddSingleton<PcService>();
            services.AddSingleton<LaptopService>();
            services.AddSingleton<PhoneService>();
            services.AddSingleton<WishlistService>();
            services.AddSingleton<ProductFeedbackService>();
            services.AddControllers().AddNewtonsoftJson(options => options.UseMemberCasing());


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            
            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }
}
