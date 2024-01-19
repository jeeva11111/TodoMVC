using System.ComponentModel.DataAnnotations;

namespace CrudOpractionMVC.Models.TodoList
{
    public class Todo
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? TaskToDo { get; set; }

        public string? Description { get; set; }


        public DateTime? CreatedData { get; set; }
        public bool IsActive { get; set; }
    }
}
