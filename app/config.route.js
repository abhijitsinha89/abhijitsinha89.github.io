app.constant('routes', getRoutes());

// Configure the routes and route resolvers
app.config(['$routeProvider', '$locationProvider', 'routes', routeConfigurator]);
function routeConfigurator($routeProvider,$locationProvider, routes) {

    routes.forEach(function (r) {
        $routeProvider.when(r.url, r.config);
    });
    $routeProvider.otherwise({ redirectTo: '/' });

}

// Define the routes
function getRoutes() {
    return [
        {
            url: '/',
            config: {
                title: 'home',
                templateUrl:  'app/upload/upload.html'
            }
        }
    ];
}