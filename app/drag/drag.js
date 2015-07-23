app.controller('Drag', ['$scope', 'UpdateImage', function($scope, UpdateImage) {
   $scope.imagePlaceholder = ['View 1','View 2','View 3','View 4','View 5', 'View 6'];
  
  addNewImages();

  function addNewImages() {
  	for(let i = 0 ; i < $scope.imagePlaceholder.length; i++) {
  		var tempImageDetails = {
  		};

  		tempImageDetails['orderId'] = i + 1;
  		tempImageDetails['label'] = $scope.imagePlaceholder[i];
  		tempImageDetails['fileName'] = 'content/images/'+ i + 1 + '.jpg';

  		UpdateImage.createNewImage(tempImageDetails);
  	}
  }

	$scope.$watch('', function (oldData, newData) {
		if (oldData === newData) {
			return;
		}
		else {

		}
	});
}]);