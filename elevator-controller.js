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
      var controller = this;
      var answer = null;
      var keys = Object.getKeys(this.elevators);
      for (var j = 0; j < keys.length; j++) {
        var elevator = controller.elevators[keys[j]];
        if (elevator.status === 'empty' && elevator.currentFloor == floorNumber) {
          answer = elevator;
          break;
        }
      }
      if (answer) {
        answer.callRequest(floorNumber);
        return;
      }
      
      answer = controller.elevators[0]; // TODO get first empty elevator
      for (var j = 1; j < keys.length; j++) {
        var elevator = controller.elevators[keys[j]];
        if (elevator.status === 'occupied') {
          continue;
        }
        var answerDist = Math.abs(floorNumber - answerDist.currentFloor);
        var elevatorDist = Math.abs(floorNumber - elevatorDist.currentFloor);
                                  
        if (elvatorDist < answerDist) {
          answer = elevator;
        }
      }
      // TODO check for occupied elevators passing floor
      answer.callRequest(floorNumber);
    }
  }

  module.exports = ElevatorController;
})();
