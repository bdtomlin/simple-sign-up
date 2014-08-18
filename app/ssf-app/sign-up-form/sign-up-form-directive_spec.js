describe("signupForm", function () {
  var scope, element, compiled, html, someone;

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
    expect(element.find('[name="first-name"]')).toBeTruthy();
    expect(element.find('[name="last-name"]')).toBeTruthy();
    expect(element.find('[name="email"]')).toBeTruthy();
    expect(element.find('.brand-logo')).toBeTruthy();
  });
});
