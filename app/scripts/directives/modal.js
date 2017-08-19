'use strict';

angular.module('mpk').directive('mpkModal', function () {
	return {
      template: '<div class="modal fade" style="white-space:normal">' + 
          '<div class="modal-dialog" style="{{ style }}" >' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        visible:"=",
        title:"@"
      },
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;
        scope.style = '';
        if (attrs.modalStyle){
          scope.style = attrs.modalStyle;
        }
        
        scope.$watch('visible', function(value){
          if(value == true)
            $(element).modal('show');
          else {
            $(element).modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
          }
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
});