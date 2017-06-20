app.controller('translate', function($scope, $translate){

  $scope.changeLng = function(lang) {
    $translate.use(lang);
  }
  $scope.currentLng = function(lang) {
    return $translate.use() == lang;
  }

});