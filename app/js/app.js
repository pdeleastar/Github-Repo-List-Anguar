angular.module('RepoListerApp', []);

var repoLister = function ($scope, $http) {
  $scope.username = '';

  $scope.loadRepos = function () {
    $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + $scope.username + '/repos'
    }).then(function successCallback(response) {
        $scope.repoList = response.data;
        $scope.message = response.data.length + ' repos';
      },
      function errorCallback(response) {
        $scope.repoList = [];
        $scope.message = ' unknown user';
      });
  }
};

angular
  .module('RepoListerApp')
  .controller('repoLister', repoLister);
