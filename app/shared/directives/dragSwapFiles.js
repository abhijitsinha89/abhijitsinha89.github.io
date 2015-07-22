app.directive('dragSwapFiles', function() {
	return {
		restrict: 'A',
		scope: {
			file: '=',
			fileName: '='
		},
		link: function(scope, element, attrs) {
			var enableDragDrop, dragStart,allowDrop,drag,drop;


			enableDragDrop = function(event) {
				if (event !== null) {
					event.preventDefault();
					event.dataTransfer.effectAllowed = 'move';
				}
			};


			drag = function(ev) {
			    ev.dataTransfer.setData("src", ev.target.id);
			}

			dragStart = function(event) {
				event.dataTransfer.setData("src", event.target.id);
			}

			element.bind('dragover', enableDragDrop);
			element.bind('dragenter', enableDragDrop);
			element.bind('dragstart', drag);


			return element.bind('drop', function(event) {
				event.preventDefault();
				var src = document.getElementById(event.dataTransfer.getData("src")),
				srcParent = src.parentNode,
				 tgt = event.currentTarget.firstElementChild;

				event.currentTarget.replaceChild(src, tgt);
    			srcParent.appendChild(tgt);
			});
		}
	};
});
