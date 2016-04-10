describe('First repoLister Test', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('RepoListerApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('repoLister', {
      $scope: $scope
    });
  }));


  it('Clicking the button retrieves the repos', function () {
    assert.equal($scope.username, '');
    //  assert.equal($scope.repoList.length, 0);
  });

});