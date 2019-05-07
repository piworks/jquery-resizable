$.fn.resizableTableColumns = function(opt) {
	opt = $.extend({
		resizeHeight: false,
		handleSelector: "> .resizer",
	}, opt);

	return this.each(function() {
		$(this)
			.css({ position: "relative" })
			.prepend("<div class='resizer'></div>")
			.resizable(opt);
	});
};