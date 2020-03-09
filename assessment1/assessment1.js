

$('.orangeblocks').click(function(){
        $("#displaybar").css("background-color",'orange');
    });
$('.purpleblocks').click(function(){
        $("#displaybar").css("background-color",'purple');
    });
$('.redblocks').click(function(){
        $("#displaybar").css("background-color",'maroon');
    });
$('#box3').click(function(){
        $("#displaybar").text("3");
    });
$('#box4').click(function(){
        $("#displaybar").text("4");
    });
$('#box5').click(function(){
        $("#displaybar").text("5");
        $("#box6").text(Math.floor((Math.random() * 30) + 1  ));
    });


 for (r=0; r<144; r++) {
            var color = 'green' 
            $('#field').append("<div class='greenbox' " + color + "'></div>");
        console.log(r);
 }