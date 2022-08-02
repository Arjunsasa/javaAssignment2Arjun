$(document).ready(function(){
    $("button").click(function(){
        $(".email").attr("href", "mailto:steve.tan@gmail.com")
        $(".phone").attr("href", "tel:93851853")
        $(".tel").attr("href", "https://t.me/steve.tan")
    });
});