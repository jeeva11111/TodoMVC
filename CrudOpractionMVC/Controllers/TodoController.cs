using CrudOpractionMVC.DbContextClass;
using CrudOpractionMVC.Models.TodoList;
using Microsoft.AspNetCore.Mvc;

namespace CrudOpractionMVC.Controllers
{
    public class TodoController : Controller
    {

        private readonly ApplicationDbContext _context;

        public TodoController(ApplicationDbContext context)
        {
            _context = context;

        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GetList()
        {
            var items = _context.Todos.ToList();
            return Json(items);
        }
        [HttpPost]
        public IActionResult AddTodoList(Todo todo)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _context.Todos.Add(todo);
                    _context.SaveChanges();
                    return Json(new { success = true, message = "Modal value is added" });
                }

                var errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage);
                return Json(new { success = false, message = "Modal validation failed", errors });
            }
            catch (Exception ex)
            {
                // Log the exception for further investigation
                Console.WriteLine(ex);
                return Json(new { success = false, message = "An error occurred while adding the Todo item" });
            }
        }


    }
}
