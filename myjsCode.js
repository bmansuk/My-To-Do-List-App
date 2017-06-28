
  //Initiate and declare our App using angular.module directive
   var app = angular.module("myToDoList", []); 
  /*
    Create and register the controller with the App.
    The controller communicates with the View through the data-ng-controller directive
   */
   app.controller("myCtrl", function($scope){

  //Add empty array to the scope
   $scope.products = [ ];

    //add items to our shopping list with error handling technique to check for items already included
    $scope.addItem = function (){
      if (!$scope.addMe) {return;}
      if ($scope.products.indexOf($scope.addMe) == -1){
          $scope.products.push($scope.addMe);
      } 
      else{
          alert ("The item is already included in the list. You don't need to add it again!");       
      }
    }

    //delete items from our shopping list
    $scope.removeItem = function (x){
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
    
  });
