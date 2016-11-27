(function(angular) {


	angular.module('mainModule').factory('funcionesService',function () {
		return {
			media: function(a,b) {
				return ( 0.5*(a+b)).toFixed(3);
			},
			varianza: function(a,b) {
				return ( (1/12)*Math.pow( (b-a),2 )).toFixed(3);
			},
			Fx: function(a,b){
				return ( 1/(b-a)).toFixed(3);
			},
			ProbX: function(sup,x,fx) {
				return ( fx*sup-fx*x).toFixed(3);
			},
			desviacionEstandar: function(n,p) {
				return ( Math.sqrt(n*p*(1-p)) ).toFixed(3);
			},
			mediaPoblacional: function(n,p) {
				return ( n*p ).toFixed(3);
			},
			convertirPorcentaje: function(p) {
				return p/100;
			},
			convertiDecimal: function(p) {
				return p*100;
			},
			probabilidadXx: function(x,u,sigma) {
				var inf = ( ((x-0.5)-u)/sigma );
				var sup = ( ((x+0.5)-u)/sigma );
				return ( sup-inf ).toFixed(3);
			},
			discretaUniforme: function() {
				return 'algo';
			}
		};
	});
	

})(window.angular);
