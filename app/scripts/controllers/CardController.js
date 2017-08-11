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

	$scope.getCardModalTitle = function() {
		if($scope.editing === false ){
			return $scope.card.name;
		}
		else {
			return "Card Details";
		}
	}

};
mpkModule.controller('CardController', CardController);
