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
    console.log(dancer);

    var dancersPositions = [];

    var calculateDistance = function(dancer1, dancer2) {
      var dancer1Left = +dancer1.$node.css('left').replace(/[^-\d\.]/g, '');
      var dancer1Top = +dancer1.$node.css('top').replace(/[^-\d\.]/g, '');

      var dancer2Left = +dancer2.$node.css('left').replace(/[^-\d\.]/g, '');
      var dancer2Top = +dancer2.$node.css('top').replace(/[^-\d\.]/g, '');

      var distance = Math.sqrt((dancer1Left - dancer2Left)*(dancer1Left - dancer2Left) + (dancer1Top - dancer2Top)*(dancer1Top - dancer2Top));
      // for (var i = 0; i < dancers.length; i++) {
      //   var x = dancers[i].$node.css('left');
      //   var y = dancers[i].$node.css('top');
      // }
      if (distance < 500) {
        alert(distance);
      } 
    }
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
    var height = $('body').height() / 3;
    var spaceBetweenEach = width / allNodes.length;
    allNodes.each(function() {
      $(this).css({'left': leftPosition, 'top': height});
      leftPosition += spaceBetweenEach;
    });
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
  });

  $('.corgi, .shiba, .pug').on('mouseover', function(event) {
    $(this).flip({
      trigger: 'hover'
    }); 
  });
   
 });

