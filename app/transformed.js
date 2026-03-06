import { lisp } from "npm:open-lisp@2026.307.72853";
export default function ($scope) {
  const $_scope_$ = lisp($scope);
  $_scope_$.evalJS(`console.log(123);
var xyz = "XYZ";
console.log(\`xyz=\${xyz}\`);
console.log($system.cwd());;
$scope.add3=function(a,b,c){return ((a+b+c))};`);
  return $_scope_$;
}
