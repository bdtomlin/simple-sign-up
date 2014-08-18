describe("signupForm", function () {
  var scope, element, compiled, html;

  beforeEach(function(){
    module('ssf-app/sign-up-form/sign-up-form-template.html');
    module('ssfApp.signUpForm.directive');

    inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      html  = '<sign-up-form><div class="brand-logo">Brand</div></sign-up-form>';
      compiled = $compile(html);
      element = compiled(scope);
      scope.$digest();
    });
  });

  it("should render the signup form", function () {
    expect(element.find('input[name="first-name"]').length).toBe(1);
    expect(element.find('input[name="last-name"]').length).toBe(1);
    expect(element.find('input[name="email"]').length).toBe(1);
    expect(element.find('.brand-logo').length).toBe(1);
  });
});
