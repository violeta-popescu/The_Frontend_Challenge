(function(){
    'use strict';
    
var app = angular.module('challenge', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
    
})    
    
app.controller('AppController',['$scope','$http',function($scope,$http) { 

    $scope.filter="";

    
    $http.get("../tiles.json").success(function(data){
        
        $scope.tiles=data;

    });
    
    $scope.filterContent=function(subtype,title, description){
        
        
        if(subtype.contains($scope.filter)||title.contains($scope.filter)||description.contains($scope.filter)){
                       
            return true;
            
        }
           
      
    }
    
   
    
    /*$scope.items=[];
  for(var i=0; i<10;i++){
    $scope.items[i] = {
      'color': ('#'+Math.floor(Math.random()*16777215).toString(16))
    };
  }*/
    
       
}])

})();    
                                 
