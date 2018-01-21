 

$(document).ready(function () {




    $("#phone").keydown(function (event) {

        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                (event.keyCode == 65 && event.ctrlKey === true) ||
                (event.keyCode >= 35 && event.keyCode <= 39)) {

            return;
        } else {

            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });






    $(".btn").click(function () {

        let name = $("#name").val();
        let phone = $("#phone").val();
        let email = $("#email").val();
        let text = $("#text").val();

        let a = new POST(name, phone, email, text)
        a.ajax_post();
        if ($("#name").val('.', 0) == -1 || $("#name").val('@', 0) == -1) {

            alert("sddsdv")
        }
        event.preventDefault();
        $("#name").val(" ");
        $("#phone").val(" ");
        $("#email").val(" ");
        $("#text").val("Ваша заявка успешно отправлена, мы с Вами свжемся в ближашее время.");
    });


    class POST {

        constructor(name, phone, email, text) {
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.text = text;

        }
        ajax_post() {
            $.ajax({
                type: "POST",
                url: "post.php",
                data: "name=" + this.name + "&phone=" + this.phone + "&email=" + this.email + "&text=" + this.text,

            })
        }
    }

});
