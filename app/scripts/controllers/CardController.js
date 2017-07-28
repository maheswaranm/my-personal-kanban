'use strict';

var CardController = function ($scope) {
	$scope.card = {};
	$scope.editTitle = false;

	$scope.editingDetails = false;
	$scope.editingTitle = false;


	$scope.$on('OpenCardDetails', function(e, card){
		$scope.card = card;

		$scope.editingDetails = false;
		$scope.editingTitle = false;

		$scope.showCardDetails = true;
	});

	$scope.editing=false;
	$scope.editCard = function() {
		$scope.editing=true;
	}

	$("#card").on('hidden.bs.modal', function(){
		$scope.$apply(function(){
			$scope.editing = false;
		});
	});

};
mpkModule.controller('CardController', CardController);
