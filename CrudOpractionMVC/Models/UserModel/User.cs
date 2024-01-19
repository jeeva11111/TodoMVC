using System.ComponentModel.DataAnnotations;

namespace CrudOpractionMVC.Models.UserModel
{
    public class User
    {

        [Required]
        [MaxLength(100)]
        [MinLength(1)]
        public string? Question { get; set; }

        public string? Answer { get; set; }
    }
}
