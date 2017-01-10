var app = angular.module('sampleapp', []);
app.controller('samplecontroller', ['$scope', function($scope) {
    
    //use Visual Studio with VS Web Essentials plugin to collapse the regions!
    
    //#region Sample 01
    
    //try to comment out this line, the binding between the input and paragraph elements still works!
    $scope.sample01input = "John Cena";
    
    //#endregion
    
    //#region Sample 02
    
    $scope.sample02clicked = function() {
        alert("Never gonna give you up :)");
    };
    
    //#endregion
    
    //#region Sample 03
    
    //this one doesn't need any JS code
    
    //#endregion
    
}]);