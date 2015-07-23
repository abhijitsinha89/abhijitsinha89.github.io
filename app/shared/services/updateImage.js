app.service('UpdateImage', [ '$http', function($http) {

var createImage = function (newImage) {
        return {
            orderId: newImage.orderId,
            label: newImage.label,
            fileName: newImage.fileName
        };
    },
    images = {};

this.updateImageObject = function (imageDetails) {
    if(images[imageDetails.orderId]) {
        images[imageDetails.orderId].fileName =  imageDetails.fileName;
    }
}

this.createNewImage = function (imageDetails) {
    if(!images[imageDetails.orderId]) {
        images[imageDetails.orderId] =  createImage(imageDetails);
    }
}

this.returnImages = function () {
    return images;
}

}]);