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

app.factory('services',services);
    
app.controller('AppController',['$scope','$http','services',function($scope,$http,services) { 

    $scope.filter="";
    
    $http.get("../tiles.json").success(function(data){
        
        $scope.tiles=data;

    });
    
        
    $scope.addTile=function(){

        
        if($scope.title!=""&&$scope.tag!=""){
            
            $scope.tiles=services.addTile($scope.title,$scope.tag,$scope.tiles);
                
        }
                    
            $scope.title="";
            $scope.tag="";
            $scope.filter="";
        
    } 

      
        /*$scope.colors=[];
        for(var i=0; i<10;i++){
            $scope.colors[i] = {
                        'color': ('#'+Math.floor(Math.random()*16777215).toString(16))
                };*/
  //}
    
       
}])

    
function services(){
        
    
        return {
            
            addTile:function(title, tag, tile){
                
            tile.push({"title":title,"tags":[{"name":tag}]});    
            return tile;                
                
            }
            
             };

    }    

})();    
                                 
