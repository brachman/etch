//last update 9-25-14

$(document).ready(
function () {
    
    var numCols = 16;
    var temp;
    createGrid(numCols);
    regular();
    
    $('#buttonRegular').click(
    function () {
        createGrid(numCols);
        regular();
    }); 
    
    $('#buttonGradient').click(
    function () {
        createGrid(numCols);
        gradientMode();
    });
    
     $('#buttonRandom').click(
    function () {
        createGrid(numCols);
        randomColor();
    });
    
     $('#buttonTrail').click(
    function () {
        createGrid(numCols);
        hoverTrail();
    });

    $('#buttonChangeSize').click(
    function () {
        var nc = getCols();
        numCols=nc;
        createGrid(nc);

    
    });
    
function createGrid(numCols)
{
    $('.row').remove();//Remove current grid
    var squareSize = 960 / numCols; 
    /*Create row divs       */
    for (var i = 0; i < numCols; i++)
    {
        $('#grid').append('<div class="row"></div>'); //ID="grid"
    }
    //Create column divs (squares)
    for (var j = 0; j < numCols; j++)
    {
        $('.row').append('<div class="square"></div>');
    }
    /*Sets each square size*/
    $('.square').css('height', squareSize + 'px');
    $('.square').css('width', squareSize + 'px');
}
function regular()
{
    $('div.square').mouseenter(function (){
        $(this).css('opacity',0.9);
        $(this).css('background-color','blue');
    });
}
function hoverTrail()
{
$("div.square").mouseenter(function() {
$( this ).fadeOut( 25 );
$( this ).fadeIn( 900 );
});
}

function randomColor()
{
    $('div.square').mouseenter(
    function()
    {
        var r =Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var opa = Math.random();

        $(this).css("background-color", "rgb(" + r +"," + g + "," + b +")");
        $(this).css("opacity", opa + 0.2); //.2 to avoid colors close to white
    });
}


function gradientMode()
{
    $('div.square').mouseenter(
    function ()
    {
        var opa = $(this).css("opacity");
        if (opa < 1)
        {
            $(this).css("opacity", opa*1.3); //1.28 for 10 hovers to get black
        }
    });
}

function getCols()
{
    debugger;
    var numCols = 50;
    numCols = prompt("How many rows would you like? (1-100)");
    while (numCols < 1 || numCols > 100) //Validation
    {
        alert("That's not a correct value. ");
        numCols = prompt("Please enter a number between 1 and 100");
    }

    return numCols;
}
    });//End document function

