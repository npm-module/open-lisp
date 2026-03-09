import { system as $system } from "npm:open-lisp@2026.310.55036";
function transformed($scope) {
  if (!$scope) $scope = {};
  console.log(123);
  var xyz = "XYZ";
  console.log(`xyz=${xyz}`);
  console.log($system.cwd());
  ;
  $scope.add3 = function (a, b, c) {
    return a + b + c;
  };
  return $scope;
}
export default transformed;
if (import.meta.main) {
  transformed(globalThis);
}