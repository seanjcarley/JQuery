$(document).ready(function(){
    //$("# panel .theButton").click(function(){
        // Challenge 1 - Hide all panels
        //$(".theButton").hide();
        
        // Challenge 1 - Hide clicked panel
        //$(this).hide();
        
        // Challenge 1 - Fade Siblings to 10%
        //$("#panel .container").siblings().fadeTo("slow", 0.1);
    //});

    // Challenge 1 - mouseenter
    $("theButton").mouseenter(function(){
        $(this).addClass("makeBlack");
    });

    // Challenge 1 - mouseout
    $(".theButton").mouseout(function(){
        $(this).removeClass("makeBlack");
    });
});