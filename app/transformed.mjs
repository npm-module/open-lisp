import {
    lisp
} from "npm:open-lisp@2026.309.5131";

function transformed($scope) {
    const $_scope_$ = lisp($scope);
    $_scope_$.evalJS(`console.log(123);
var xyz = "XYZ";
console.log(\`xyz=\${xyz}\`);
console.log($system.cwd());;
$scope.add3=function(a,b,c){return ((a+b+c))};`);
    return $_scope_$;
}
export default transformed;
if (import.meta.main) {
    transformed(globalThis);
}