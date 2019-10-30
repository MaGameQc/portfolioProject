


let css = "";
let classe = "";
const nbOfIcons = $(".icons").length;




// section button clicked ---------------------------
$("#butonLeft, #butonUp, #butonRight, #butonDown").click(function() {
   switch($(this).attr("id")){

        case "butonUp":
            // changer le display none si proglème
          $(".mainContainer").animate({top :"100%", opacity: "0", display: "none"}, 1800, function(){
              $(this).css("display", "none");
              $("#ProjectsMainCont").css("display", "block").animate({bottom:"0", opacity:"1"}, "slow");
              $("body, html").css("overflow-y", "auto");

              $(".vidProjet").each(function(){
                $(this).css({"top": "-150px", "opacity": "0"});
              });
              $(".vidProjet").each(function(){
                $(this).delay("500").animate({top:"0", opacity:"1"}, "slow");
              });

          });

        // sliding(top, $("#chooseUp"), bottom);
               break;


        case "butonRight":
          $(".mainContainer").animate({right :"100%", opacity: "0", display: "none"}, 1800, function(){
              $(this).css("display", "none");
              $("#chooseRight").css("display", "block").animate({left:"0", opacity:"1"}, "slow");
              $("body, html").css("overflow-y", "auto");


              var scenesSelector = document.querySelectorAll('.scene');

              for(i=0; i<scenesSelector.length; i++){
                  scenes[i] = new Parallax(scenesSelector[i]);
              }


          });



              break;


        case "butonDown":

          $(".mainContainer").animate({bottom :"100%", opacity: "0"}, 1800, function(){
              $(this).css("display", "none");
                $("#chooseDown").css("display", "block").animate({top:"0", opacity:"1"}, "slow");


                // l'animation des icones dans contact va se lancer ici
                const nbOfIcons2 = $(".icons2").length;
                for(i=0; i < nbOfIcons2; i++){
                $(".icons2").delay(800).eq(i).animate({ opacity: "1", top :"0"}, 175).delay(300, function(){
                $(this).addClass("animated bounce");
                $(".contactIcons2Text").delay(2400).animate({opacity:"1"}, "slow");
                });
                }



          });


              break;


        case "butonLeft":
          $(".mainContainer").animate({left :"100%", opacity: "0"}, 1800, function(){
              $(this).css("display", "none");
              $("#chooseLeft").css("display", "block").animate({right:"0", opacity:"1"}, "slow");
          });
            window.location.href='https://github.com/MaGameQc?tab=repositories';
              break;


           default:
           console.log("error no button detected");

   }
});



// section video portfolio

$("#vid1").hover(function(){
    $("#overlayVid1").animate({height:"100%", opacity:"1"}, "slow");

}, function(){
    $("#overlayVid1").animate({height:"0%", opacity:"0"}, "slow");
});

$("#vid2").hover(function(){
    $("#overlayVid2").animate({height:"100%", opacity:"1"}, "slow");

}, function(){
    $("#overlayVid2").animate({height:"0%", opacity:"0"}, "slow");
});
// -------------------------------------
$("#vid3").hover(function(){
    $("#overlayVid3").animate({height:"100%", opacity:"1"}, "slow");

}, function(){
    $("#overlayVid3").animate({height:"0%", opacity:"0"}, "slow");
});
// -------------------------------------------
$("#vid4").hover(function(){
    $("#overlayVid4").animate({height:"100%", opacity:"1"}, "slow");

}, function(){
    $("#overlayVid4").animate({height:"0%", opacity:"0"}, "slow");
});


// function sliding(homePageDirection, id, chosenDirection){
//     $(".mainContainer").animate({homePageDirection :"100%", opacity: "0"}, 1800, function(){
//               $(this).css("display", "none");
//               id.css("display", "block").animate({chosenDirection :"0", opacity:"1"}, "slow");
//     });
// }


// $("#vidDiv1").hover(function(){
//     $("#overlay1").css("display", "block");
//     // $(this).toggle;
// });


$(document).ready(function(){
    $("#butonLeft").css({"left": "-150px", "opacity": "0"});
    $("#butonRight").css({"right": "-150px", "opacity": "0"});
    $("#butonUp").css({"top": "-150px", "opacity": "0"});
    $("#butonDown").css({"bottom": "-150px", "opacity": "0"});

   $(".btn").fadeIn(1800, function() {
        $("#butonLeft").animate({left:'0px', opacity: '1'},"slow");
        $("#butonRight").animate({right:'0px', opacity: '1'},"slow");
        $("#butonUp").animate({top:'0px', opacity: '1'},"slow");
        $("#butonDown").animate({bottom:'0px', opacity: '1'},"slow");
        $("#photoContainer").fadeIn(1000);

        // seciont sélection

        // $(".mainContainer").css("display", "none");
        // $("#bas").css({"top": "-1000px"})
        // $("#bas").animate({bottom :"0px", opacity: "1"}, 3000);


// loop qui cré le bounce effect en ajoutant la class animated bounce
           for(i=0; i < nbOfIcons; i++){
        $(".icons").delay(800).eq(i).animate({ opacity: "1", top :"0"}, 175).delay(300, function(){
        $(this).addClass("animated bounce");
        });


        }





   });




//
// var scene = document.getElementById('scene2');
// var parallaxInstance = new Parallax(scene2);

var scenes = [];
var scenesSelector = document.querySelectorAll('.scene');

for(i=0; i<scenesSelector.length; i++){
    scenes[i] = new Parallax(scenesSelector[i]);
}

// function scenesDisable(){
//     for(i=0; i<scenes.length; i++){
//         scenes[i].disable();
//     }
// }
//
// function scenesEnable(){
//     for(i=0; i<scenes.length; i++){
//         scenes[i].enable();
//     }
// }
});




//  ---------------------------------------------------------------------

$(".up").hover(function(){

  if( $(this).is(":hover") === true ){

    css = $(this).css('background-color');
    // $(this).css("background-color", "red");
    $(".imUp").css({"display" : "block", "object-fit" : "cover"});
    $(".imFront").css("display", "none");



} else {
    $(this).css("background-color", css );
    $(".imUp").css("display", "none");
    $(".imFront").css({"display" : "block", "object-fit" : "cover"});
}
});
//  ---------------------------------------------------------------------
$(".right").hover(function(){


  if( $(this).is(":hover") === true ){
    css = $(this).css('background-color');
    // $(this).css("background-color", "red");
    $(".imRight").css({"display" : "block", "object-fit" : "cover"});
    $(".imFront").css("display", "none");



} else {
    $(this).css("background-color", css );
    $(".imRight").css("display", "none");
    $(".imFront").css({"display" : "block", "object-fit" : "cover"});

}
});
//  ---------------------------------------------------------------------
$(".down").hover(function(){


  if( $(this).is(":hover") === true ){
    css = $(this).css('background-color');
    // $(this).css("background-color", "red");
    $(".imDown").css({"display" : "block", "object-fit" : "cover"});
    $(".imFront").css("display", "none");




} else {
    $(this).css("background-color", css );
    $(".imDown").css("display", "none");
    $(".imFront").css({"display" : "block", "object-fit" : "cover"});

}
});
//  ---------------------------------------------------------------------
$(".left").hover(function(){


  if( $(this).is(":hover") === true ){
    css = $(this).css('background-color');
    // $(this).css("background-color", "red");
    $(".imLeft").css({"display" : "block", "object-fit" : "cover"});
    $(".imFront").css("display", "none");




} else {
    $(this).css("background-color", css );
    $(".imLeft").css("display", "none");
    $(".imFront").css({"display" : "block", "object-fit" : "cover"});

}
});

$('.mainContainer').tilt({
    // glare: true,
    // maxGlare: .3,
    maxTilt: 5
})

//  ---------------------------------------------------------------------







//  ----------------------- chose UP-------------------------------

// $("#divVid1").hover(function() {
//     $(this).css({"display": "none", "cursor": "pointer", "background-color": "white"});
// });
