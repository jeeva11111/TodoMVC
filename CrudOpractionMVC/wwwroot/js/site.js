$(document).ready(function () {
    FetcherURL();
});

function AddedModal() {
    alert("task");
    $('#myModal').modal('show');
    // AddTodoModal();
}

// Added new modal
function AddTodoModal() {
    var task = $("#taskToDo").val();
    var description = $("#description").val();
    var createdData = $("#createdData").val();
    var isActive = $("#isActive").val();

    var obj = {
        Task: task,
        Description: description,
        CreatedData: createdData,
        IsActive: isActive
    };

    $.ajax({
        url: '/Todo/AddTodoList',
        type: 'POST',
        data: obj,
        success: function (response) {
            if (response.success) {
                alert(response.message);
                $('#myModal').modal('hide');
                FetcherURL();
            } else {
                console.log(response); // Log the entire response object
                alert("Modal value failed to add");
            }
        },
        error: function (error) {
            console.error("Error adding Todo item:", error);
        }
    });
}



// Fetching the model details
function FetcherURL() {
    $.ajax({
        url: '/Todo/GetList',
        type: 'GET',
        success: function (res) {
            console.log(res);

            if (!res || res.length === 0) {
                var message = '<tr> <td>No Task available </td> </tr>';
                $('#tblTodo').html(message);
                console.log(res + "line one");
            } else {
                var tableBody = '';

                $.each(res, function (idx, item) {
                    console.log(item + "Items list");
                    tableBody += '<tr>';
                    tableBody += '<td>' + item.id + '</td>';
                    tableBody += '<td>' + item.taskToDo + '</td>';
                    tableBody += '<td>' + item.description + '</td>';
                    tableBody += '<td>' + '<input   class="form-control" readonly type="date" value="' + (item.createdData ? new Date(item.createdData).toISOString().split('T')[0] : '') + '"/>' + '</td>';
                    tableBody += '<td>' + '<input  class="form-control" type="radio" value="' + item.isActive + '" ' + (item.isActive ? 'checked' : '') + '/>' + '</td>';

                    tableBody += '</tr>';
                });

                $("#tblTodo").html(tableBody);
            }
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        }
    });
}

function openAlert(txt) {
    $('.alert-content').text(txt);
    $('.alert').addClass('in');
}

function closeAlert() {
    $('.alert').removeClass('in');
}

$(function () {
    var answer = '';

    if (answer && answer !== '') {
        openAlert(answer);
    }

    $('#Question').change(closeAlert);
    $('#Question').keyup(closeAlert);

    $('.submit').click(function () {
        if ($('#myForm').valid()) {
            $.ajax({
                url: '/User/GetAnswer',
                data: { Answer: '', Question: $('#Question').val() },
                type: 'POST',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (resp) {
                    openAlert(resp);
                }
            });
        } else {
            closeAlert();
        }
    });
});
