var ElevatorController = require('./elevator-controller.js');

var controller = new ElevatorController();
controller.setElevatorCount(4);
controller.setFloorCount(10);

controller.start();