var pAge1 = $('.profileAge1').text();
var pAge2 = $('.profileAge2').text();
var pAge3 = $('.profileAge3').text();
var thenum1 = pAge1.replace( /^\D+/g, '');
var thenum2 = pAge2.replace( /^\D+/g, '');
var thenum3 = pAge3.replace( /^\D+/g, '');
var age1 = parseInt(thenum1)
var age2 = parseInt(thenum2) 
var age3 = parseInt(thenum3)

$(document).ready(function(){
    $(".addF").click(function(){
        alert("Friend has been added")
    });
});

$(document).ready(function(){
    $(".sort").click(function(){
        if (age1 <= 25){
            $(".profile1").hide();
        }
        if (age2 <=25){
            $(".profile2").hide(); 
        }
        if (age3 <=25){
            $(".profile3").hide(); 
        }
    });
});
