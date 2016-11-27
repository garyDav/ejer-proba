(function(angular){
	'use strict';
	angular.module('mainModule').controller('mainCtrl',['$scope','$rootScope','$location','funcionesService',
		function($scope,$rootScope,$location,funcionesService) {
			$scope.dataNav = [];
			$scope.res1 = '';
			$scope.res2 = '';
			$scope.res3 = '';
			$scope.res4 = '';

			$scope.distProbContinuas = function() {
				reset();
				$scope.dataNav = [
					{id: '1',name: 'Distribucion Discreta Uniforme'},
					{id: '2',name: 'Distribucion Normal'},
					{id: '3',name: 'Distribucion Gamma'},
					{id: '4',name: 'Distribucion Exponencial'},
					{id: '5',name: 'Distribucion de Weibull'},
					{id: '6',name: 'Distribucion Ji-cuadrado'}
				];
			};
			$scope.distProbConjuntasDiscretoBivariado = function() {
				reset();
				$scope.dataNav = [
					{id: '7',name: 'Distribuciones de probabilidad marginal'},
					{id: '8',name: 'Distribuciones de probabilidad condicional'},
					{id: '9',name: 'Variables aleaotrias discretas independientes'}
				];
			};
			$scope.distProbConjuntasContinuoBivariado = function() {
				reset();
				$scope.dataNav = [
					{id: '10',name: 'Densidad de probabilidad marginal'},
					{id: '11',name: 'Densidad de probabilidad condicional'},
					{id: '12',name: 'Variables aleatorias continuas independientes'}
				];
			};
			$scope.pruebaHipotesis = function() {
				reset();
				$scope.dataNav = [
					{id: '13',name: 'P.H. relacionada con la media(Muestras Grandes)'},
					{id: '14',name: 'P.H. relacionada con la media(Muestras Pequeñas)'}
				];
			};
			$scope.inferenciasRelacionadasProporcionMGrandes = function() {
				reset();
				$scope.dataNav = [
					{id: '15',name: 'Inferencias relacionadas con la proporcion (Muestras Grandes)'}
				];
			};
			$scope.inferenciasRelacionadasVarianza = function() {
				reset();
				$scope.dataNav = [
					{id: '16',name: 'Inferencias relacionadas con la varianza'}
				];
			};

			function reset() {
				$scope.dataNav = [];
			};

			$scope.calcular1 = function(newObj) {
				var a = newObj.a;
				var b = newObj.b;
				var x = newObj.x;

				$scope.res1 = funcionesService.media(a,b);
				$scope.res2 = funcionesService.varianza(a,b);
				$scope.res3 = funcionesService.Fx(a,b);
				$scope.res4 = funcionesService.ProbX(b,x,funcionesService.Fx(a,b));
				console.log('Entra calcular1');
			};
			$scope.calcular2 = function(newObj) {
				

				console.log('Entra calcular2');
			};
			$scope.calcular3 = function(newObj) {
				console.log('Entra calcular3');
			};
			$scope.calcular4 = function(newObj) {
				console.log('Entra calcular4');
			};
			$scope.calcular5 = function(newObj) {
				console.log('Entra calcular5');
			};
			$scope.calcular6 = function(newObj) {
				console.log('Entra calcular6');
			};
			$scope.calcular7 = function(newObj) {
				console.log('Entra calcular7');
			};
			$scope.calcular8 = function(newObj) {
				console.log('Entra calcular8');
			};
			$scope.calcular9 = function(newObj) {
				console.log('Entra calcular9');
			};
			$scope.calcular10 = function(newObj) {
				console.log('Entra calcular10');
			};
			$scope.calcular11 = function(newObj) {
				console.log('Entra calcular11');
			};
			$scope.calcular12 = function(newObj) {
				console.log('Entra calcular12');
			};
			$scope.calcular13 = function(newObj) {
				console.log('Entra calcular13');
			};
			$scope.calcular14 = function(newObj) {
				console.log('Entra calcular14');
			};
			$scope.calcular15 = function(newObj) {
				console.log('Entra calcular15');
			};
			$scope.calcular16 = function(newObj) {
				console.log('Entra calcular16');
			};



			$scope.viewNav = function(id) {
				//console.log("Entra viewNav con el ID: "+id);
				switch(id) {
					case '1':
						//code
						$location.path('/uniforme');
						//console.log( funcionesService.discretaUniforme() );
						break;
					case '2':
						//code
						$location.path('/normal');
						break;
					case '3':
						//code
						$location.path('/gamma');
						break;
					case '4':
						//code
						$location.path('/exponencial');
						break;
					case '5':
						//code
						$location.path('/weibull');
						break;
					case '6':
						//code
						$location.path('/ji-cuadrado');
						break;
					case '7':
						//code
						$location.path('/distribucion-marginal');
						break;
					case '8':
						//code
						$location.path('/distribucion-condicional');
						break;
					case '9':
						//code
						$location.path('/va-dis-independientes');
						break;
					case '10':
						//code
						$location.path('/densidad-marginal');
						break;
					case '11':
						//code
						$location.path('/densidad-condicional');
						break;
					case '12':
						//code
						$location.path('/va-cont-independientes');
						break;
					case '13':
						//code
						$location.path('/prueba-hipotesis-mg');
						break;
					case '14':
						//code
						$location.path('/prueba-hipotesis-mp');
						break;
					case '15':
						//code
						$location.path('/inf-rel-proporcion');
						break;
					case '16':
						//code
						$location.path('/inf-re-varianza');
						break;
				}
			};

		}
	]);

})(window.angular);