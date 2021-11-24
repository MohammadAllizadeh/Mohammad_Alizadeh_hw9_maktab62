$(document).ready(function () {

    $("body").on('click', '.toggle-password', function () {
        $(this).toggleClass("fa-eye fa-eye-slash");

        var input = $("#PassWord").attr("type");
        // alert(input);
        if (input === "password") {
            $("#PassWord").attr("type", "text");
        } else {
            $("#PassWord").attr("type", "password");
        }
    });

    $("#PassWord").keyup(function (e) {
        function validateError(message) {
            $("#Vallidate").html(message);
            $("#Vallidate").css("color", "Red");
            $("#EnterPassword").css("color", "Red");
            $("#PassWord").css("color", "Red");
            $("#togglePassword").css('color', 'red');
        };
        function validateSuccess() {
            $("#Vallidate").html('You entered a valid password');
            $("#Vallidate").css("color", "green");
            $("#EnterPassword").css("color", "green");
            $("#PassWord").css("color", "green");
            $("#togglePassword").css('color', 'green');
        }
        if (PassWord.value == "") {
            validateError('Password cannot be blank!');
            PassWord.focus();
            return false;
        }
        re = /^\w+$/;
        if (re.test(PassWord.value)) {
            validateError('Password must contain only letters, numbers and underscores!');
            PassWord.focus();
            return false;
        };
        if (PassWord.value.length < 8) {
            validateError('Password must contain at least 8 characters!');
            PassWord.focus();
            return false;
        }
        re = /[0-9]/;
        if (!re.test(PassWord.value)) {
            validateError('password must contain at least one number (0-9)!');
            PassWord.focus();
            return false;
        }

        re = /[a-z]/;
        if (!re.test(PassWord.value)) {
            validateError('password must contain at least one lowercase letter (a-z)!');
            PassWord.focus();
            return false;
        }
        re = /[A-Z]/;
        if (!re.test(PassWord.value)) {
            validateError('password must contain at least one uppercase letter (A-Z)!');
            PassWord.focus();
            return false;
        }

        else {
            validateSuccess()
            return true;
        }
    });
});
