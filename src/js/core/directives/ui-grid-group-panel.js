(function(){
  'use strict';

  angular.module('ui.grid').directive('uiGridGroupPanel', ["$compile", "uiGridConstants", "gridUtil", function($compile, uiGridConstants, gridUtil) {
    var defaultTemplate = 'ui-grid/ui-grid-group-panel';

    function gotTemplate ($scope, $elm, contents) {
      var template = angular.element(contents);
      
      var newElm = $compile(template)($scope);
      $elm.append(newElm);
    }

    return {
      restrict: 'EA',
      replace: true,
      require: '?^uiGrid',
      scope: false,
      compile: function($elm, $attrs) {
        return {
          pre: function ($scope, $elm, $attrs, uiGridCtrl) {
            var groupPanelTemplate = $scope.grid.options.groupPanelTemplate  || defaultTemplate;
             gridUtil.getTemplate(groupPanelTemplate).then(gotTemplate.bind(null, $scope, $elm));
          },

          post: function ($scope, $elm, $attrs, uiGridCtrl) {
            /*
            $elm.bind('$destroy', function() {
              // scrollUnbinder();
            });
            */
          }
        };
      }
    };
  }]);

})();
