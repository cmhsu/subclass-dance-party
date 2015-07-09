var makeShibaDancer = function(top, left, timeBetweenSteps) {
  //moved to top so oldStep is set before being overridden before we inherit from makeDancer
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="shiba"></span>');
  this.$node.html('<span class="front"><img class="size" src="images/shiba.gif"></span><span class="back"><img class="size" src="images/shiba.gif"></span>');

  this.setPosition(top, left);
  this.action();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeShibaDancer.prototype = Object.create(makeDancer.prototype);

makeShibaDancer.prototype.action = function() {
  // / call the old version of step at the beginning of any call to this new version of step
  this.$node.flip();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

makeShibaDancer.prototype.constructor = makeShibaDancer;