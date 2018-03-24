$(document).ready(() => {
    // Add new table row
    $(".add-student").click(() => {
        let rollno = $("#rollno").val();
        let name = $("#name").val();
        let passoutyear = $("#passoutyear").val();
        let stream = $("#stream").val();
        let markup = `<tr><td><input type='checkbox' name='record'></td>
        <td>${rollno}</td><td>${name}</td><td>${passoutyear}</td><td>${stream}</td>
        <td><button type='button' class='edit-student btn btn-success'>Edit</button></td></tr>`;
        if (isValid(rollno, name, passoutyear, stream))
            $("table tbody").append(markup);
    });

    const isValid = (rollno, name, passoutyear, stream) => {
        var nameExp = /^[A-Za-z]+$/;
        if (rollno == "") {
            alert("Roll No. not valid!");
            return false;
        }
        if (!nameExp.test(name)) {
            alert("Name not valid!");
            return false;
        }
        if (passoutyear == "") {
            alert("Not a valid Passout Year!");
            return false;
        }
        if (!nameExp.test(stream)) {
            alert("Not a valid Stream!");
            return false;
        }
        return true;
    }

    // Edit a table row
    var _trEdit = null;
    $(document).on('click', '.edit-student', function () {
        $('.add-student').prop('disabled', true);
        $('.update-student').prop('disabled', false);
        _trEdit = $(this).closest("tr");
        let _rollno = $(_trEdit).find('td:eq(1)').text();
        let _name = $(_trEdit).find('td:eq(2)').text();
        let _passoutyear = $(_trEdit).find('td:eq(3)').text();
        let _stream = $(_trEdit).find('td:eq(4)').text();
        $('input[id="rollno"]').val(_rollno);
        $('input[id="name"]').val(_name);
        $('input[id="passoutyear"]').val(_passoutyear);
        $('input[id="stream"]').val(_stream);
    });

    // Update a table row
    $(".update-student").click(function () {
        if (_trEdit) {
            let rollno = $("#rollno").val();
            let name = $("#name").val();
            let passoutyear = $("#passoutyear").val();
            let stream = $("#stream").val();

            $(_trEdit).find('td:eq(1)').text(rollno);
            $(_trEdit).find('td:eq(2)').text(name);
            $(_trEdit).find('td:eq(3)').text(passoutyear);
            $(_trEdit).find('td:eq(4)').text(stream);

            alert("record has been updated");
            _trEdit = null;
            $('.add-student').prop('disabled', false);
            $(this).prop('disabled', true);
        }
    });

    // Find and remove selected table rows
    $(".delete-student").click(() => {
        $("table tbody").find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });
});


