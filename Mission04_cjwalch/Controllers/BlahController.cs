using Microsoft.AspNetCore.Mvc;
using Mission04_cjwalch.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_cjwalch.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult gradeCalc() // GET
        {
            return View(); // nothing in parentheses defaults to above view
        }
        [HttpPost]
        public IActionResult gradeCalc (gradeCalcModel model) // POST
        {
            return View(); // method overloading
        }

    }
}
