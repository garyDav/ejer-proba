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
				return p*100;
			},
			convertiDecimal: function(p) {
				return p/100;
			},
			probabilidadXx: function(x,u,sigma) {
				var inf = ( ((x-0.5)-u)/sigma ).toFixed(3);
				var sup = ( ((x+0.5)-u)/sigma ).toFixed(3);
				return {sup:sup,inf:inf};
				//return ( sup-inf );
			},
			mediaGamma: function(a,b) {
				return a*b;
			},
			varianzaGamma: function(a,b) {
				return (a*Math.pow(b,2)).toFixed(3);
			},
			FxGammaDen: function(rro,beta,alfa) {
				//return ( (1/Math.pow(beta,alfa)*rro)*Math.pow(x,alfa-1)*Math.pow(Math.E,-x/beta) ).toFixed(3);
				return ( Math.pow(beta,alfa)*rro );
			},
			probGamma: function(x) {
				var ls = (-2*Math.pow(x,2)*Math.pow(Math.E,-x/2)) + 4*(-2*x*Math.pow(Math.E,-x/2)) + 2*(-2*Math.pow(Math.E,-x/2));
				var xf = 0;
				var li = (-2*Math.pow(xf,2)*Math.pow(Math.E,-xf/2)) + 4*(-2*xf*Math.pow(Math.E,-xf/2)) + 2*(-2*Math.pow(Math.E,-xf/2));
				return ( ls-li ).toFixed(3);
			},
			varianzaExponencial: function(u) {
				return u*u;
			},
			probYexponencial: function(b,t) {
				var ls = (-4*Math.pow(Math.E,-t/4));
				t = 0;
				var li = (-4*Math.pow(Math.E,-t/4));
				return ( 1-(1/b)*(ls-li) ).toFixed(4);
			},
			hipotesisZ: function(mediaM,mediaP,sigma,n) {
				var res = (mediaM-mediaP)/(sigma/Math.sqrt(n));
				return res.toFixed(4);
			},
			hipotesisT: function(mediaM,mediaP,s,n) {
				var res = (mediaM-mediaP)/(s/Math.sqrt(n));
				return res.toFixed(4);
			},
			factorial: function(x) {
				var fac=1;
				for(var i=1;i<=x;i++) {
					fac *= i;
				}
				return fac;
			},
			factorizar: function(num,den) {
			    for(var i=0;i<50;i++) {
			        if( (num%2==0) && (den%2)==0 ) {
			            num /= 2;
			            den /= 2;
			        }
			        if( (num%3==0) && (den%3)==0 ) {
			            num /= 3;
			            den /= 3;
			        }
			        if( (num%5==0) && (den%5)==0 ) {
			            num /= 5;
			            den /= 5;
			        }
			        if( (num%7==0) && (den%7)==0 ) {
			            num /= 7;
			            den /= 7;
			        }
			        if( (num%11==0) && (den%11)==0 ) {
			            num /= 11;
			            den /= 11;
			        }
			        if( (num%13==0) && (den%13)==0 ) {
			            num /= 13;
			            den /= 13;
			        }
			        if( (num%17==0) && (den%17)==0 ) {
			            num /= 17;
			            den /= 17;
			        }
			        if( (num%19==0) && (den%19)==0 ) {
			            num /= 19;
			            den /= 19;
			        }
			        if( (num%23==0) && (den%23)==0 ) {
			            num /= 23;
			            den /= 23;
			        }
			        if( (num%29==0) && (den%29)==0 ) {
			            num /= 29;
			            den /= 29;
			        }
			    }
			    return {num:num,den:den};
			},
			discretaUniforme: function() {
				return 'algo';
			}
		};
	});
	

})(window.angular);
