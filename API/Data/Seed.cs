using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace API.Data
{
    public class Seed
    {
        public static void seedProjects(PortfolioContext dbContext) {
            if(!dbContext.Projects.Any()) {
                var projectData = System.IO.File.ReadAllText("Data/ProjectSeedData.json");
                var projects = JsonConvert.DeserializeObject<List<Project>>(projectData);
                foreach (var project in projects)
                {
                    dbContext.Projects.Add(project);
                }

                dbContext.SaveChanges();
            }
        }
    }
}