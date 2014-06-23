function routeList($routeProvider) {
$routeProvider.
      when('/', {controller:listController, templateUrl:'/contactapp/partials/list.html'}).
      when('/contacts/', {controller:listController, templateUrl:'/contactapp/partials/list.html'}).
      when('/contacts/:id', {controller:viewController, templateUrl:'/contactapp/partials/contact.html'}).
      when('/add/', {controller:addController, templateUrl:'/contactapp/partials/add.html'}).
      otherwise({redirectTo:'/'});
}
routeList.$inject=['$routeProvider'];
contactmanager.config(routeList);