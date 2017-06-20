$(document).ready(function () {

    //function para apresentar filtro
    $(".toggle-sidebar2").click(function () {
        $("#sidebar2").toggleClass("collapsed");
        $("#content2").toggleClass("col-md-12 col-md-9");

        return false;
    });

    //sequencia de funcão para filtro de sistema

    function hide_divs(search) {
        $(".tipo-sistemas").hide(); // hide all divs
        //$("#all-icons-demo h2").hide();
        //$("#all-icons-demo .alert").hide();
        $('.demo-icon-font > a > span > span[class*="' + search + '"]').parent().show(); // show the ones that match
    }

    function show_all() {
        $(".tipo-sistemas").show()
        $("#all-icons-demo h2").show();
        $("#all-icons-demo .alert").show();
    }

    $("#pesquisar-sitema").keyup(function () {
        var search = $.trim(this.value);
        if (search === "") {
            show_all();
        }
        else {
            hide_divs(search);
        }
    });


});


