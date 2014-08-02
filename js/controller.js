var puddingApp = angular.module('puddingApp',[]);

var inventory = [
  {
    'name': 'Strawberry',
    'price': 4.5,
    'quantity': 0,
  },
  {
    'name': 'Mint',
    'price': 3.5,
    'quantity': 0,
  },
  {
    'name': 'Hazelnut',
    'price': 4,
    'quantity': 0,
  },
  {
    'name': 'Orange',
    'price': 3.5,
    'quantity': 0,
  },
  {
    'name': 'Berry',
    'price': 3.5,
    'quantity': 0,
  },
  {
    'name': 'Banana',
    'price': 4,
    'quantity': 0,
  }
];

puddingApp.controller('FlavorCtrl', function($scope) {
  $scope.cart = [];
  $scope.cart.addRemove = function(flavor) {
    for (var i = 0; i < $scope.cart.length; i++) {
      if($scope.cart[i].name == flavor) {
        $scope.cart[i].quantity = 0;
        $scope.cart.splice(i,1);
        return;
      }
    }
    for (var i = 0; i < inventory.length; i++) {
      if(inventory[i].name == flavor) {
        // console.log(inventory[i]);
        $scope.cart.push(inventory[i]);
        var cartIndex = $scope.cart.length - 1;
        $scope.cart[cartIndex].quantity = $scope.cart[cartIndex].quantity + 1;
        console.log($scope.cart[cartIndex]);
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