var puddingApp = angular.module('puddingApp',[]);

var inventory = [
  {
    'name': 'Strawberry',
    'price': 4.5,
  },
  {
    'name': 'Mint',
    'price': 3.5,
  },
  {
    'name': 'Hazelnut',
    'price': 4,
  },
  {
    'name': 'Orange',
    'price': 3.5,
  },
  {
    'name': 'Berry',
    'price': 3.5,
  },
  {
    'name': 'Banana',
    'price': 4,
  }
];

puddingApp.controller('FlavorCtrl', function($scope) {
  $scope.cart = [];
  $scope.cart.add = function(flavor) {
    for (var i = 0; i < $scope.cart.length; i++) {
      if($scope.cart[i].name == flavor) {
        $scope.cart.splice(i,1);
        return;
      }
    }
    for (var i = 0; i < inventory.length; i++) {
      if(inventory[i].name == flavor) {
        console.log(inventory[i]);
        $scope.cart.push(inventory[i]);
        return;
      }
      // else {
      //   alert("There was an error.");
      // }
    }

  }
  // $scope.cart.remove = function(flavor) {
  //   for (var i = 0; i < $scope.cart.length; i++) {
  //     if($scope.cart[i].name == flavor) {
  //       $scope.cart.splice(i,1);
  //     }
  //   }
  // }
});