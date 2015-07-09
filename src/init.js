$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height()-200)* Math.random(),
      ($("body").width()-200) * Math.random(),
      1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    var calculateDistance = function(dancer1, dancer2) {
      var dancer1Left = +dancer1.$node.css('left').replace(/[^-\d\.]/g, '');
      var dancer1Top = +dancer1.$node.css('top').replace(/[^-\d\.]/g, '');

      var dancer2Left = +dancer2.$node.css('left').replace(/[^-\d\.]/g, '');
      var dancer2Top = +dancer2.$node.css('top').replace(/[^-\d\.]/g, '');

      var distance = +Math.sqrt((dancer1Left - dancer2Left)*(dancer1Left - dancer2Left) + (dancer1Top - dancer2Top)*(dancer1Top - dancer2Top));
      // for (var i = 0; i < dancers.length; i++) {
      //   var x = dancers[i].$node.css('left');
      //   var y = dancers[i].$node.css('top');
      // }
      
      if (distance < 100) {
        var scroll = function() {
          console.log(dancer1.$node.css('top').replace(/[^-\d\.]/g, ''));
          if (dancer1.$node.css('top').replace(/[^-\d\.]/g, '') > 100 || dancer2.$node.css('top').replace(/[^-\d\.]/g, '') > 100) {
            dancer1.$node.animate({top: '-=40'}, 500, 'linear', function() {
              dancer1.$node.animate({top: '+=40'}, 500, 'linear', function() {scroll()});
            });
            // dancer2.$node.animate({top: '-=40'}, 200, 'linear', function() {
            //   dancer2.$node.animate({top: '+=40'}, 200, 'linear', function() {scroll()});
            // });
          }
        };
        scroll();
      } 
    };

    for (var i = 0; i < dancers.length; i++) {
      var currentDancer = dancers[i];
      for (var j = 0; j < dancers.length; j++) {
        if (dancers[j] !== currentDancer) {
          calculateDistance(currentDancer, dancers[j]);
        }
      }
    }  

  });


  $('.lineup').on('click', function(event) {
    var allNodes = $('.corgi, .shiba, .pug');
    var leftPosition = 50;
    var width = $('body').width()-200;
    var height = screen.height-300;
    var spaceBetweenEach = width / allNodes.length;

    allNodes.stop(true);
    setTimeout(function(){}, 1000);
    allNodes.each(function() {
      $(this).css({'left': leftPosition, 'top': height});
      leftPosition += spaceBetweenEach;
      
    });
 
    // var calculateDistance = function(dancer1, dancer2) {
    //   var dancer1Left = +dancer1.$node.css('left').replace(/[^-\d\.]/g, '');
    //   var dancer1Top = +dancer1.$node.css('top').replace(/[^-\d\.]/g, '');

    //   var dancer2Left = +dancer2.$node.css('left').replace(/[^-\d\.]/g, '');
    //   var dancer2Top = +dancer2.$node.css('top').replace(/[^-\d\.]/g, '');

    //   var distance = +Math.sqrt((dancer1Left - dancer2Left)*(dancer1Left - dancer2Left) + (dancer1Top - dancer2Top)*(dancer1Top - dancer2Top));
    //   // for (var i = 0; i < dancers.length; i++) {
    //   //   var x = dancers[i].$node.css('left');
    //   //   var y = dancers[i].$node.css('top');
    //   // }
    //   console.log(dancer1);
    //   console.log(dancer2);
    //   if (distance < 200) {
    //     var scroll = function() {
    //       console.log(dancer1.$node.css('top').replace(/[^-\d\.]/g, ''));
    //       if (dancer1.$node.css('top').replace(/[^-\d\.]/g, '') > 100 || dancer2.$node.css('top').replace(/[^-\d\.]/g, '') > 100) {
    //         dancer1.$node.animate({top: '-=40'}, 200, 'linear', function() {
    //           dancer1.$node.animate({top: '+=40'}, 200, 'linear', function() {scroll()});
    //         });
    //         dancer2.$node.animate({top: '-=40'}, 200, 'linear', function() {
    //           dancer2.$node.animate({top: '+=40'}, 200, 'linear', function() {scroll()});
    //         });
    //       }
    //     };
    //     scroll();
    //   } 
    // };

    // for (var i = 0; i < dancers.length; i++) {
    //   var currentDancer = dancers[i];
    //   for (var j = 0; j < dancers.length; j++) {
    //     if (dancers[j] !== currentDancer) {
    //       calculateDistance(currentDancer, dancers[j]);
    //     }
    //   }
    // }  
  });

  $('.disperse').on('click', function(event) {
    var allNodes = $('.corgi, .shiba, .pug');
    var width = $('body').width() - 300;
    var height = $('body').height() - 300;
    allNodes.each(function(index, value) {
      var leftPosition =  width * Math.random();
      var topPosition =  height * Math.random();
      $(this).css({'left': leftPosition, 'top': topPosition});
    });


    var calculateDistance = function(dancer1, dancer2) {
      var dancer1Left = +dancer1.$node.css('left').replace(/[^-\d\.]/g, '');
      var dancer1Top = +dancer1.$node.css('top').replace(/[^-\d\.]/g, '');

      var dancer2Left = +dancer2.$node.css('left').replace(/[^-\d\.]/g, '');
      var dancer2Top = +dancer2.$node.css('top').replace(/[^-\d\.]/g, '');

      var distance = +Math.sqrt((dancer1Left - dancer2Left)*(dancer1Left - dancer2Left) + (dancer1Top - dancer2Top)*(dancer1Top - dancer2Top));
      // for (var i = 0; i < dancers.length; i++) {
      //   var x = dancers[i].$node.css('left');
      //   var y = dancers[i].$node.css('top');
      // }
      console.log(dancer1);
      console.log(dancer2);
      if (distance < 200) {
        var scroll = function() {
          console.log(dancer1.$node.css('top').replace(/[^-\d\.]/g, ''));
          if (dancer1.$node.css('top').replace(/[^-\d\.]/g, '') > 100 || dancer2.$node.css('top').replace(/[^-\d\.]/g, '') > 100) {
            dancer1.$node.animate({top: '-=40'}, 200, 'linear', function() {
              dancer1.$node.animate({top: '+=40'}, 200, 'linear', function() {scroll()});
            });
            dancer2.$node.animate({top: '-=40'}, 200, 'linear', function() {
              dancer2.$node.animate({top: '+=40'}, 200, 'linear', function() {scroll()});
            });
          }
        };
        scroll();
      } 
    };

    for (var i = 0; i < dancers.length; i++) {
      var currentDancer = dancers[i];
      for (var j = 0; j < dancers.length; j++) {
        if (dancers[j] !== currentDancer) {
          calculateDistance(currentDancer, dancers[j]);
        }
      }
    }  
  });

  $('.corgi, .shiba, .pug').on('mouseover', function(event) {
    $(this).flip({
      trigger: 'hover'
    });
  });
   
 });

