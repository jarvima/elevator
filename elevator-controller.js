(function() {
  var Elevator = require('./Elevator.js');
  
  function ElevatorController() {
    this.setElevatorCount = function(count) {
      this.elevatorCount = count;
    }
  }

  module.exports = {
    ElevatorController: ElevatorController
  }
})();
