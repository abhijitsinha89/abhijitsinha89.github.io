app.directive('dragImageFiles', function() {
	return {
		restrict: 'A',
		scope: {
			file: '=',
			fileName: '='
		},
		link: function(scope, element, attrs) {
			var isTypeValid,
			enableDragDrop,
			validMimeTypes = attrs.dragImageFiles;

			enableDragDrop = function(event) {
				if (event !== null) {
					event.preventDefault();
					event.dataTransfer.effectAllowed = 'copy';
				}
			};

			isTypeValid = function(type) {
				if (validMimeTypes.indexOf(type) > -1) {
					return true;
				}
				else {
					alert('Invalid file type, file must be one of following types ' + validMimeTypes);
					return false;
				}
			};

			element.bind('dragover', enableDragDrop);
			element.bind('dragenter', enableDragDrop);

			return element.bind('drop', function(event) {
				var file, name, reader, size, type;

				if (event !== null) {
					event.preventDefault();

					reader = new FileReader();

					file = event.dataTransfer.files[0];
					name = file.name;
					type = file.type;
					size = file.size;
					reader.readAsDataURL(file);

					reader.onload = function(evt) {
						if (isTypeValid(type)) {
							return scope.$apply(function() {
								scope.file = evt.target.result;
								element.addClass('lowerZindex');
								return scope.fileName = name;
							});
						}
					};
					return false;
				}
			});
		}
	};
});
