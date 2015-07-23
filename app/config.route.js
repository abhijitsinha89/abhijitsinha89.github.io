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
                templateUrl:  'app/drag/drag.html'
            }
        },
        {
            url: '/upload-drag',
            config: {
                title: 'upload-drag',
                templateUrl:  'app/upload-drag/upload-drag.html'
            }
        }
    ];
}