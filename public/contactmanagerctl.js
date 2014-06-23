function listController($scope, $http) {  
    $scope.headers = ["name", "phone"];
    $scope.columnSort={sortColumn:'name',reverse:false};
    {sortColumn='name',reverse=false};
    $http({method: 'get', url: '/contactapp/contacts'})
        .success(function(data) {
            $scope.contacts = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}
listController.$inject=['$scope','$http'];
contactmanager.controller('listController',listController);

function viewController($scope, $http, $routeParams) {  
  $http({method: 'get', url: '/contactapp/contacts/' + $routeParams.id })
        .success(function(data) {
            $scope.contact = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
 
}
viewController.$inject=['$scope','$http','$routeParams'];
contactmanager.controller('viewController',viewController);

function addController($scope, $http, $location) {  
  $scope.form = {};
  $scope.addContact = function () {
    $http.post('/contactapp/contacts', $scope.form)
      .success(function(data) {
            $location.path('/contactapp');
      })
      .error(function(data) {
            console.log('Error: ' + $scope.form);
        });
  };
}
addController.$inject=['$scope','$http','$location'];
contactmanager.controller('addController',addController);