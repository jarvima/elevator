(function() {
  function Elevator(id) {
    this.id = id;
    console.log('creating elevator:', this.id);
    
    this.currentFloor = 1;
    this.status = 'empty';
    this.tripCount = 0;
    this.floorsPassed = 0;
    
    this.setFloorCount = function(count) {
      this.floorCount = count;
    }
    
    // external request
    this.callRequest = function(floorNumber) {
      this.gotoFloor(floorNumber);
    }
    
    // internal request
    this.floorRequest = function(floorNumber) {
      this.status = 'occupied';
      this.gotoFloor(floorNumber);
    }
    
    this.passFloor = function(floorNumber) {
      console.log('Elevator ' + this.id + ' going to floor ' + floorNumber);
      this.floorsPassed++;
    }
    
    this.gotoFloor = function(floorNumber) {
      if (floorNumber > this.floorCount) {
        // do nothing
        console.log('invalid floor request', floorNumber);
        return;
      }
      
      if (floorNumber < 1) {
        // do nothing
        console.log('invalid floor request', floorNumber);
        return;
      }
      
      if (floorNumber > this.currentFloor) {
        for (var j = this.currentFloor + 1; j <= floorNumber; j++) {
          this.passFloor(j);
        }
      }
      else if (floorNumber < this.currentFloor) {
        for (var j = this.currentFloor - 1; j >= floorNumber; j--) {
          this.passFloor(j);
        }
      }
      this.currentFloor = floorNumber;
      this.openDoors();
      this.tripCount++;
      if (this.tripCount > 99) {
        this.closeDoors();
        this.status = 'maintenance';
      }
      else {
        this.status = 'empty';
      }
    }
    
    this.maintain = function() {
      this.status = 'empty';
    }
    
    this.openDoors = function() {
      console.log('Elevator ' + this.id + ' opening doors');
      this.closeDoors();
    }
    
    this.closeDoors = function() {
      console.log('Elevator ' + this.id + ' closing doors');
    }
  }

  module.exports = Elevator;
})();
