var makeCorgiDancer = function(top, left, timeBetweenSteps) {
  //moved to top so oldStep is set before being overridden before we inherit from makeDancer
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="corgi"></span>');
  this.$node.html('<span class="front"><img class="size" src="images/corgiswim_right.gif"></span><span class="back"><img class="size" src="images/corgiswim_left.gif"></span>');

  this.setPosition(top, left);
  this.rotate();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeCorgiDancer.prototype = Object.create(makeDancer.prototype);

makeCorgiDancer.prototype.rotate = function() {
  // / call the old version of step at the beginning of any call to this new version of step
  this.$node.flip({
    trigger: 'manual'
  });
  
  this.$node.flip(true);
  this.oldStep();
  this.$node.flip(false);
};

makeCorgiDancer.prototype.constructor = makeCorgiDancer;