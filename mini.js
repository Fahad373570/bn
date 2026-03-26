$(document).ready(function() {
    $('#add-btn').on('click', function() {
        var task = $('#task-input').val();

        if (task !== "") {
            var taskTemplate = `
                <li>
                    <input type="checkbox" class="toggle-complete">
                    <span>${task}</span>
                    <span class="delete">X</span>
                </li>`;
            
            $('#task-list').append(taskTemplate);
            $('#task-input').val("");
        } else {
            alert("Please enter a task!");
        }
    });
    $(document).on('click', '.delete', function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });
    $(document).on('change', '.toggle-complete', function() {
        $(this).parent().toggleClass('completed');
    });
    $('#task-input').on('keypress', function(e) {
        if(e.which === 13) {
            $('#add-btn').click();
        }
    });

});