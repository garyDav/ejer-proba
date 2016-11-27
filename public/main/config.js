(function(angular){
	'use strict';

	angular.module('mainModule').config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/',{
					templateUrl: 'public/main/views/principal.view.html'
				}).
				when('/uniforme',{
					templateUrl: 'public/main/views/view1.html'
				}).
				when('/normal',{
					templateUrl: 'public/main/views/view2.html'
				}).
				when('/gamma',{
					templateUrl: 'public/main/views/view3.html'
				}).
				when('/exponencial',{
					templateUrl: 'public/main/views/view4.html'
				}).
				when('/weibull',{
					templateUrl: 'public/main/views/view5.html'
				}).
				when('/ji-cuadrado',{
					templateUrl: 'public/main/views/view6.html'
				}).
				when('/distribucion-marginal',{
					templateUrl: 'public/main/views/view7.html'
				}).
				when('/distribucion-condicional',{
					templateUrl: 'public/main/views/view8.html'
				}).
				when('/va-dis-independientes',{
					templateUrl: 'public/main/views/view9.html'
				}).
				when('/densidad-marginal',{
					templateUrl: 'public/main/views/view10.html'
				}).
				when('/densidad-condicional',{
					templateUrl: 'public/main/views/view11.html'
				}).
				when('/va-cont-independientes',{
					templateUrl: 'public/main/views/view12.html'
				}).
				when('/prueba-hipotesis-mg',{
					templateUrl: 'public/main/views/view13.html'
				}).
				when('/prueba-hipotesis-mp',{
					templateUrl: 'public/main/views/view14.html'
				}).
				when('/inf-rel-proporcion',{
					templateUrl: 'public/main/views/view15.html'
				}).
				when('/inf-re-varianza',{
					templateUrl: 'public/main/views/view16.html'
				}).
				otherwise({
					redirectTo: '/'
				});
		}
	]);

})(window.angular);