(function() {
  var Elevator = require('./Elevator.js');
  
  function ElevatorController() {
    this.elevators = {};
    
    this.setElevatorCount = function(count) {
      if (count < 1) {
        throw Error('elevator count must be greater than 0');
      }
      
      this.elevatorCount = count;
      
      for (var j = 0; j < count; j++) {
        var elevator = new Elevator(j);
        elevator.setFloorCount(this.floorCount);
        this.elevators[j] = elevator;
      }
    }
    
    this.setFloorCount = function(count) {
      if (count < 2) {
        throw Error('floor count must be greater than 1');
      }
      
      this.floorCount = count;
    }
    
    this.requestElevator = function(floorNumber) {
      this.elevators[0].callRequest(floorNumber);
    }
  }

  module.exports = ElevatorController;
})();
