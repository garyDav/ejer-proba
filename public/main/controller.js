(function(angular){
	'use strict';
	angular.module('mainModule').controller('mainCtrl',['$scope','$rootScope','$location','funcionesService',
		function($scope,$rootScope,$location,funcionesService) {
			$scope.dataNav = [{id: '0',name: 'Aqui entran todos los ejercicios'}];
			$scope.res1 = '';
			$scope.res2 = '';
			$scope.res3 = '';
			$scope.res4 = '';
			$scope.res5 = '';

			$scope.distProbContinuas = function() {
				reset();
				$scope.dataNav = [
					{id: '1',name: 'Distribucion Discreta Uniforme'},
					{id: '2',name: 'Distribucion Normal'},
					{id: '3',name: 'Distribucion Gamma'},
					{id: '4',name: 'Distribucion Exponencial'}
					//{id: '5',name: 'Distribucion de Weibull'}
					//{id: '6',name: 'Distribucion Ji-cuadrado'}
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
				var n = newObj.n;
				var p = newObj.p;
				var x = newObj.x;

				p = funcionesService.convertiDecimal(p);
				var mediaP = funcionesService.mediaPoblacional(n,p);
				var sigma = funcionesService.desviacionEstandar(n,p);

				console.log(p);
				$scope.res1 = funcionesService.probabilidadXx(x,mediaP,sigma).sup;
				$scope.res2 = funcionesService.probabilidadXx(x,mediaP,sigma).inf;
			};
			$scope.calcular3 = function(newObj) {
				var alfa = newObj.a;
				var beta = newObj.b;
				var x = newObj.x;

				var media = funcionesService.mediaGamma(alfa,beta);
				var varianza = funcionesService.varianzaGamma(alfa,beta);
				var rro = funcionesService.factorial(alfa-1);
				var FxGammaDen = funcionesService.FxGammaDen(rro,beta,alfa);
				var prob = (1-(1/FxGammaDen)*funcionesService.probGamma(x)-0.7362).toFixed(4);
				
				$scope.res1 = media;
				$scope.res2 = varianza;
				$scope.res3 = FxGammaDen;
				$scope.exp1 = alfa-1;
				$scope.beta = beta;
				$scope.res4 = funcionesService.convertirPorcentaje(prob);
				console.log('Entra calcular3');
			};
			$scope.calcular4 = function(newObj) {
				var media = newObj.u;
				var n = newObj.n;
				var t = newObj.t;
				var x = newObj.x;

				$scope.res1 = funcionesService.varianzaExponencial(media);
				$scope.res2 = funcionesService.probYexponencial(media,t);
				var combinatoria = funcionesService.factorial(n)/(funcionesService.factorial($scope.res2)*funcionesService.factorial(n-$scope.res2));
				var probX = (combinatoria*Math.pow($scope.res2,x)*Math.pow(1-$scope.res2,n-x)).toFixed(4);

				$scope.res3 = funcionesService.convertirPorcentaje(probX).toFixed(2);
				console.log('Entra calcular4');
			};
			$scope.calcular5 = function(newObj) {
				console.log('Entra calcular5');
			};
			$scope.calcular6 = function(newObj) {
				console.log('Entra calcular6');
			};
			$scope.calcular7 = function(newObj) {
				var vectorY = new Array();
				var vectorX = new Array();
				var fx = newObj.fx.split(' ',2);
				//15/2 x^2*y
				//1/18 x*y
				var division = fx[0].split('/',2);
				var numerador = Number( division[0] );
				var denominador = Number( division[1] );
				var ladoX = fx[1].split('*',2)[0];
				var ladoY = fx[1].split('*',2)[1];

				var expX = Number(ladoX.split('^',2)[1]);
				var expY = Number(ladoY.split('^',2)[1]);

				var lx = newObj.lx;
				var ly = newObj.ly;

				var sumY = 0;
				var sumX = 0;

				if(expX)
					for(var i=0;i<lx;i++) {
						sumX += Math.pow( Number( $(".vectorX").children('input')[i].value ),expX );
					}
				else
					for(var i=0;i<lx;i++) {
						sumX += Number( $(".vectorX").children('input')[i].value );
					}
				if(expY)
					for(var i=0;i<ly;i++) {
						sumY += Math.pow( Number( $(".vectorY").children('input')[i].value ),expY );
					}
				else
					for(var i=0;i<ly;i++) {
						sumY += Number( $(".vectorY").children('input')[i].value );
					}

				var Gx = funcionesService.factorizar( (sumY*numerador),denominador);
				var Gy = funcionesService.factorizar( (sumX*numerador),denominador);
				$scope.res1 = Gx.num + '*'+ ladoX + '/' + Gx.den;
				$scope.res2 = Gy.num + '*'+ ladoY + '/' + Gy.den;

				var Px = funcionesService.factorizar( (Gx.num * newObj.x),Gx.den);
				var Py = funcionesService.factorizar( (Gy.num * newObj.y),Gy.den);
				$scope.res3 = Px.num+'/'+Px.den;
				$scope.res4 = Py.num+'/'+Py.den;

				/*console.log( 'Numerador: '+numerador );
				console.log( 'Denominador: '+denominador );
				console.log( 'expX: '+expX );
				console.log( 'expY: '+expY );
				console.log( 'Sumatoria X: '+sumX );
				console.log( 'Sumatoria Y: '+sumY );
				console.log( 'g(x): ' + Gx.num + '/' + Gx.den );
				console.log( 'g(y): ' + Gy.num + '/' + Gy.den );*/
			};
			$scope.calcular8 = function(newObj) {
				var vectorY = new Array();
				var vectorX = new Array();
				var fx = newObj.fx.split(' ',2);
				//15/2 x^2*y
				//1/18 x*y
				var division = fx[0].split('/',2);
				var numerador = Number( division[0] );
				var denominador = Number( division[1] );
				var ladoX = fx[1].split('*',2)[0];
				var ladoY = fx[1].split('*',2)[1];

				var expX = Number(ladoX.split('^',2)[1]);
				var expY = Number(ladoY.split('^',2)[1]);

				var lx = newObj.lx;
				var ly = newObj.ly;

				var sumY = 0;
				var sumX = 0;

				if(expX)
					for(var i=0;i<lx;i++) {
						sumX += Math.pow( Number( $(".vectorX").children('input')[i].value ),expX );
					}
				else
					for(var i=0;i<lx;i++) {
						sumX += Number( $(".vectorX").children('input')[i].value );
					}
				if(expY)
					for(var i=0;i<ly;i++) {
						sumY += Math.pow( Number( $(".vectorY").children('input')[i].value ),expY );
					}
				else
					for(var i=0;i<ly;i++) {
						sumY += Number( $(".vectorY").children('input')[i].value );
					}

				var Gx = funcionesService.factorizar( (sumY*numerador),denominador);
				var Gy = funcionesService.factorizar( (sumX*numerador),denominador);
				$scope.res1 = Gx.num + '*'+ ladoX + '/' + Gx.den;
				$scope.res2 = Gy.num + '*'+ ladoY + '/' + Gy.den;

				/*var Px = funcionesService.factorizar( (Gx.num * newObj.x),Gx.den);
				var Py = funcionesService.factorizar( (Gy.num * newObj.y),Gy.den);*/
				var Fxy = funcionesService.factorizar( (numerador*Gy.den),denominador*Gy.num);
				var Fyx = funcionesService.factorizar( (numerador*Gx.den),denominador*Gx.num);

				$scope.res3 = Fxy.num+'*'+ladoX+'/'+Fxy.den;
				$scope.res4 = Fyx.num+'*'+ladoY+'/'+Fyx.den;
				var resultado5 = funcionesService.factorizar(Fxy.num*newObj.x,Fxy.den);
				$scope.res5 = resultado5.num+'/'+resultado5.den;

				/*console.log( 'Numerador: '+numerador );
				console.log( 'Denominador: '+denominador );
				console.log( 'expX: '+expX );
				console.log( 'expY: '+expY );
				console.log( 'Sumatoria X: '+sumX );
				console.log( 'Sumatoria Y: '+sumY );
				console.log( 'g(x): ' + Gx.num + '/' + Gx.den );
				console.log( 'g(y): ' + Gy.num + '/' + Gy.den );*/
			};
			$scope.calcular9 = function(newObj) {
				var vectorY = new Array();
				var vectorX = new Array();
				var fx = newObj.fx.split(' ',2);
				//15/2 x^2*y
				//1/18 x*y
				var division = fx[0].split('/',2);
				var numerador = Number( division[0] );
				var denominador = Number( division[1] );
				var ladoX = fx[1].split('*',2)[0];
				var ladoY = fx[1].split('*',2)[1];

				var expX = Number(ladoX.split('^',2)[1]);
				var expY = Number(ladoY.split('^',2)[1]);

				var lx = newObj.lx;
				var ly = newObj.ly;

				var sumY = 0;
				var sumX = 0;

				if(expX)
					for(var i=0;i<lx;i++) {
						sumX += Math.pow( Number( $(".vectorX").children('input')[i].value ),expX );
					}
				else
					for(var i=0;i<lx;i++) {
						sumX += Number( $(".vectorX").children('input')[i].value );
					}
				if(expY)
					for(var i=0;i<ly;i++) {
						sumY += Math.pow( Number( $(".vectorY").children('input')[i].value ),expY );
					}
				else
					for(var i=0;i<ly;i++) {
						sumY += Number( $(".vectorY").children('input')[i].value );
					}

				var Gx = funcionesService.factorizar( (sumY*numerador),denominador);
				var Gy = funcionesService.factorizar( (sumX*numerador),denominador);
				$scope.res1 = Gx.num + '*'+ ladoX + '/' + Gx.den;
				$scope.res2 = Gy.num + '*'+ ladoY + '/' + Gy.den;

				/*var Px = funcionesService.factorizar( (Gx.num * newObj.x),Gx.den);
				var Py = funcionesService.factorizar( (Gy.num * newObj.y),Gy.den);*/
				var Fxy = funcionesService.factorizar( (numerador*Gy.den),denominador*Gy.num);
				var Fyx = funcionesService.factorizar( (numerador*Gx.den),denominador*Gx.num);

				$scope.res3 = Fxy.num+'*'+ladoX+'/'+Fxy.den;
				$scope.res4 = Fyx.num+'*'+ladoY+'/'+Fyx.den;
				/*var resultado5 = funcionesService.factorizar(Fxy.num*newObj.x,Fxy.den);
				$scope.res5 = resultado5.num+'/'+resultado5.den;*/

				/*console.log( 'Numerador: '+numerador );
				console.log( 'Denominador: '+denominador );
				console.log( 'expX: '+expX );
				console.log( 'expY: '+expY );
				console.log( 'Sumatoria X: '+sumX );
				console.log( 'Sumatoria Y: '+sumY );
				console.log( 'g(x): ' + Gx.num + '/' + Gx.den );
				console.log( 'g(y): ' + Gy.num + '/' + Gy.den );*/
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
				var n =newObj.n;
				var um = newObj.um;
				var de = newObj.de;
				var sig = newObj.sig;
				var up = newObj.up;
				var ha = newObj.ha;

				$scope.res1 = 'Ho: µ='+newObj.up;
				if(ha == 'mayor') {
					$scope.res2 = 'Ha: µ>'+newObj.up;
					$scope.Siz = 'z>';
				}
				if(ha == 'menor') {
					$scope.res2 = 'Ha: µ<'+newObj.up;
					$scope.Siz = 'z<';
				}
				$scope.res3 = 'α='+funcionesService.convertiDecimal(sig);


				console.log('parametro n: '+n);
				console.log('parametro um: '+um);
				console.log('parametro de: '+de);
				console.log('parametro sig: '+sig);
				console.log('parametro up: '+up);
				console.log('parametro ha: '+ha);
				console.log('Entra calcular13');
			};
			$scope.calcular13_Z = function(newObj) {
				var n =newObj.n;
				var um = newObj.um;
				var de = newObj.de;
				var csig = newObj.sig;
				var sig = funcionesService.convertiDecimal(newObj.sig);
				var up = newObj.up;
				var ha = newObj.ha;
				var z = newObj.z;

				$scope.res5 = funcionesService.hipotesisZ(um,up,de,n);
				if( ha == 'mayor' ) {
					if( z>sig ) {
						$scope.res6 = 'Se rechaza que la media poblacional es '+up+' y se concluye con una significancia de '+csig+'% que el peso promedio de la poblacion es mayor a '+up+'gr';
					} else {
						$scope.res6 = 'No se rechaza la ipotesis nula Ho: '+up;
					}
				} else {
					if( z<sig ) {
						$scope.res6 = 'Se rechaza que la media poblacional es '+up+' y se concluye con una significancia de '+csig+'% que el peso promedio de la poblacion es menor a '+up+'gr';
					} else {
						$scope.res6 = 'No se rechaza la ipotesis nula Ho: '+up;
					}
				}

			};
			$scope.calcular14 = function(newObj) {
				var vectorX = new Array();
				var n = newObj.n;
				var sig = newObj.sig;
				var up = newObj.up;
				var ha = newObj.ha;
				var sumX = 0;
				var sumVM = 0;
				var v = n-1;
				$scope.gradosL = v;

				for(var i=0;i<n;i++) {
					sumX += Number( $(".vectorX").children('input')[i].value );
					vectorX[i] = Number( $(".vectorX").children('input')[i].value );
				}
				var mediaM = (1/n)*sumX;
				for(var i=0;i<n;i++) {
					sumVM += Math.pow( vectorX[i]-mediaM , 2 );
				}
				var S = Math.sqrt( (1/v)*sumVM );



				$scope.res1 = 'Ho: µ='+up;
				if(ha == 'mayor') {
					$scope.res2 = 'Ha: µ>'+up;
					$scope.res4 = 'Rechazar Ho si t>';
					$scope.Siz = 'z>';
				}
				if(ha == 'menor') {
					$scope.res2 = 'Ha: µ<'+up;
					$scope.res4 = 'Rechazar Ho si t<';
					$scope.Siz = 'z<';
				}
				$scope.res3 = funcionesService.convertiDecimal(sig);

				console.log('Longitud n: '+n);
				console.log('Sumatoria X: '+sumX);
				console.log(vectorX);
			};
			$scope.calcular14_T = function(newObj) {
				var vectorX = new Array();
				var n = newObj.n;
				var sig = newObj.sig;
				var up = newObj.up;
				var ha = newObj.ha;
				var sumX = 0;
				var sumVM = 0;
				var v = n-1;

				for(var i=0;i<n;i++) {
					sumX += Number( $(".vectorX").children('input')[i].value );
					vectorX[i] = Number( $(".vectorX").children('input')[i].value );
				}
				var mediaM = (1/n)*sumX;
				for(var i=0;i<n;i++) {
					sumVM += Math.pow( vectorX[i]-mediaM , 2 );
				}
				var S = Math.sqrt( (1/v)*sumVM );

				$scope.res5 = funcionesService.hipotesisT(mediaM,up,S,n);
				if( ha == 'mayor' ) {
					if( $scope.res5>newObj.t ) {
						$scope.res6 = 'Se rechaza que la media poblacional es '+up;
					} else {
						$scope.res6 = 'No hay evidencia suficinete para rechazar que la Media poblacional es '+up;
					}
				} else {
					if( $scope.res5<newObj.t ) {
						$scope.res6 = 'Se rechaza que la media poblacional es '+up;
					} else {
						$scope.res6 = 'No hay evidencia suficinete para rechazar que la Media poblacional es '+up;
					}
				}
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