var makePugDancer = function(top, left, timeBetweenSteps) {
  //moved to top so oldStep is set before being overridden before we inherit from makeDancer
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="pug"></span>');
  this.$node.html('<span class="front"><img class="pugs" src="images/pug.gif"></span><span class="back"><img class="pugs" src="images/pug.gif"></span>');

  this.setPosition(top, left);
  this.action();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makePugDancer.prototype = Object.create(makeDancer.prototype);

makePugDancer.prototype.action = function() {
  // / call the old version of step at the beginning of any call to this new version of step
  this.$node.flip({
    trigger: 'hover'
  }); 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

makePugDancer.prototype.constructor = makePugDancer;