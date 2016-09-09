(function() {
  function Elevator(id) {
    this.id = id;
    console.log('creating elevator:', this.id);
    
    this.currentFloor = 1;
    
    // external request
    this.callRequest = function(floorNumber) {
      this.gotoFloor(floorNumber);
    }
    
    // internal request
    this.floorRequest = function(floorNumber) {
      this.gotoFloor(floorNumber);
    }
    
    this.gotoFloor = function(floorNumber) {
      if (floorNumber > this.currentFloor) {
        for (var j = this.currentFloor + 1; j <= floorNumber; j++) {
          console.log('Elevator ' + this.id + ' going to floor ' + j);
        }
      }
      else if (floorNumber < this.currentFloor) {
        for (var j = this.currentFloor - 1; j >= floorNumber; j--) {
          console.log('Elevator ' + this.id + ' going to floor ' + j);
        }
      }
      this.currentFloor = floorNumber;
    }
  }

  module.exports = Elevator;
})();
