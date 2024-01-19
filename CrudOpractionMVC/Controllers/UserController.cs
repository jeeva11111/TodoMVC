using CrudOpractionMVC.Models.UserModel;
using Microsoft.AspNetCore.Mvc;

namespace CrudOpractionMVC.Controllers
{

    public class UserController : Controller
    {
        private static Random _random = new Random();
        private static List<string> _db = new List<string>() { "Magical world", "spells", "Mystic", "Time" };

        [HttpGet]
        public IActionResult Index()
        {

            var store = new User();
            return View(store);
        }
        [HttpPost]

        public JsonResult GetAnswer(string question)
        {
            int index = _random.Next(_db.Count);
            var answer = _db[index];

            return Json(answer);
        }
    }
}
