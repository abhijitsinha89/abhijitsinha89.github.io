app.directive('dragSwapFiles', function() {
	return {
		restrict: 'A',
		scope: {
			file: '=',
			fileName: '='
		},
		link: function(scope, element, attrs) {
			var dragover, dragenter,
			dragStart,dragLeave, drop;
			window.currentDraggedElement = null;

			dragover = function(event) {
				if (event !== null) {
					event.preventDefault();
					event.dataTransfer.effectAllowed = 'move';
				}
			};

			dragenter = function(event) {
				if (event !== null) {
					event.preventDefault();
					this.classList.add("active-drop");
				}
			};

			dragLeave = function (event) {
				if (event !== null) {
					event.preventDefault();
					this.classList.remove("active-drop");
				}
			};

			 dragStart = function(event) {
				event.dataTransfer.setData("src", this.innerHTML);
				this.classList.add('draggableElement');
				currentDraggedElement = this;
			};

			drop = function(event) {
				event.preventDefault();
				if (currentDraggedElement !== this) {
					var that = this;
					currentDraggedElement.classList.remove('draggableElement');
					currentDraggedElement.innerHTML = this.innerHTML;
					this.classList.remove("active-drop");
    				this.innerHTML = event.dataTransfer.getData('src');
    				this.classList.add('set-element-after-drop');
    				setTimeout(function(){ that.classList.remove('set-element-after-drop'); }, 1000);
				}
			};

			element.bind('dragover', dragover);
			element.bind('dragenter', dragenter);
			element.bind('dragstart', dragStart);
			element.bind('dragleave', dragLeave);
			element.bind('drop', drop);
		}
	};
});
