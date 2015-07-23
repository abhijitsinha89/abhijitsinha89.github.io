app.directive('dragImageFiles', function() {
	return {
		restrict: 'A',
		scope: {
			file: '=',
			fileName: '='
		},
		link: function(scope, element, attrs) {
			var isTypeValid,
			dragenter,dragover,drop,
			validMimeTypes = attrs.dragImageFiles;

			dragenter = function(event) {
				if (event !== null) {
					event.preventDefault();
					event.dataTransfer.effectAllowed = 'copy';
				}
			};

			dragover = function(event) {
				if (event !== null) {
					event.preventDefault();
					event.dataTransfer.effectAllowed = 'copy';
				}
			};

			drop = function(event) {
				var file, name, reader, size, type;

				if (event !== null) {
					event.preventDefault();

					reader = new FileReader();

					file = event.dataTransfer.files[0];
					reader.readAsDataURL(file);
					name = file.name;
					type = file.type;
					size = file.size;

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

			element.bind('dragover', dragover);
			element.bind('dragenter', dragenter);
			element.bind('drop', drop);

		}
	};
});
