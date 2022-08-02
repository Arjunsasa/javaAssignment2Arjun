//the btns in jquery//
// $(document).ready(function(){
//     $(".hideName").click(function(){
//       $(".fullName").toggle();
//     });
//   });

// $(document).ready(function(){
//     $(".hideEmail").click(function(){
//         $(".email").toggle();
//     });
// });

// $(document).ready(function(){
//     $(".hidePhone").click(function(){
//         $(".phone").toggle();
//     });
// });

// $(document).ready(function(){
//     $(".hideTel").click(function(){
//         $(".telegram").toggle();
//     });
// });

// $(document).ready(function(){
//     $(".chgColor1").click(function(){
//       $("body").css("background-color", " #FF9900");
//     });
// });

// $(document).ready(function(){
//     $(".chgColor2").click(function(){
//       $("body").css("background-color", " #7B2CF1");
//     });
// });

$(document).ready(function(){
    $(".ageBtn").click(function(){
        var newAge = $(".inputAge").val();
        $(".age").html("Age: " + newAge);
    });
});