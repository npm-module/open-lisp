import { lisp } from "npm:open-lisp@2026.307.81625";
export default function ($scope) {
  const $_scope_$ = lisp($scope);
  $_scope_$.evalJS(`console.log("XXX");
console.log($system.cwd());;
console.log(\`answerA=\${11+22}\`);
console.log(\`answerB=\${110+220}\`);
console.log(\`
answer1=\${110+220}
answer2=\${330+440}
\`);
console.log("abc\\ndef");
console.log(((function(__dict__){__dict__={};return (__dict__["abc"]="xyz",__dict__["bbb"]=((function(__obj__){__obj__=[];return (__obj__[0]=11,__obj__[1]=undefined,__obj__[2]="ハロー©",__obj__)})()),__dict__)})()));
console.log(111+222);
console.log(777+888);
console.log(1111+2222);
console.log(1111
+
2222);
console.log("str");
console.log("ハロー©");
$scope.xyz=777;
console.log($scope.xyz);
console.log(123);
console.log((11+22));
$scope.x=123;
($scope.x=(1+$scope.x),$scope.x=(2+$scope.x),console.log($scope.x));
((function(__dotimes_cnt__,__dotimes_idx__,i){__dotimes_cnt__=3;__dotimes_idx__=0;i=__dotimes_idx__;return (((function(){while(!(__dotimes_idx__>=__dotimes_cnt__)){(console.log(i),__dotimes_idx__=(__dotimes_idx__+1),i=__dotimes_idx__)}})(),null),null)})());
((function(__dotimes_cnt__,__dotimes_idx__,i){__dotimes_cnt__=3;__dotimes_idx__=0;i=__dotimes_idx__;return (((function(){while(!(__dotimes_idx__>=__dotimes_cnt__)){(((function(__dotimes_cnt__,__dotimes_idx__,j){__dotimes_cnt__=2;__dotimes_idx__=0;j=__dotimes_idx__;return (((function(){while(!(__dotimes_idx__>=__dotimes_cnt__)){(console.log(((function(__obj__){__obj__=[];return (__obj__[0]=i,__obj__[1]=j,__obj__)})())),__dotimes_idx__=(__dotimes_idx__+1),j=__dotimes_idx__)}})(),null),null)})()),__dotimes_idx__=(__dotimes_idx__+1),i=__dotimes_idx__)}})(),null),null)})());
$scope.x=11;
$scope.y=22;
console.log(($scope.x+$scope.y));
((function(a,b){return (console.log((a+b)))})(33,44));
((function(a,b){a=55;b=(1+a);return (console.log(a,b))})());
((function(a,b){a=55;b=(1+a);return (console.log(a,b))})());
$scope.fact=function(n){return (((function(factorial){return (((n<0)?-1:((((function(__dotimes_cnt__,__dotimes_idx__,i){__dotimes_cnt__=n;__dotimes_idx__=0;i=__dotimes_idx__;return (((function(){while(!(__dotimes_idx__>=__dotimes_cnt__)){(factorial=(factorial*(1+i)),__dotimes_idx__=(__dotimes_idx__+1),i=__dotimes_idx__)}})(),null),null)})()),factorial))))})(1)))};
console.log($scope.fact(4));
$scope.fact2=function(x){return (((function(n,result){n=2;result=1;return (((function(){while(!(x<n)){(result=(result*n),n=(1+n))}})(),null),result)})()))};
console.log($scope.fact2(4));
console.log(((2<4)&&(3<4)));
console.log(((2<4)&&(3>4)));
(function(){try{return (function(){throw 123})()}catch(ex){return (console.log(ex))}})();
$scope.add3=function(a,b,c){return ((a+b+c))};`);
  return $_scope_$;
}
