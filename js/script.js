$(document).ready(function(){
    $(".theButton").click(function(){
        // Challenge 1 - Hide all panels
        //$(".theButton").hide();
        
        // Challenge 1 - Hide clicked panel
        //$(this).hide();
        
        // Challenge 1 - Fade Siblings to 10%
        $(this).siblings(".theButton").fadeTo(0.1);
    });
});