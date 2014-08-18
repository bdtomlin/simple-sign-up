(function() {
  "use strict";

  angular.module('ssfApp.signUpForm.directive',[]).directive('signUpForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'ssf-app/sign-up-form/sign-up-form-template.html',
      transclude: true,
      replace: true
    };
  });
}());
