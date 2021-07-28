// Fires a click event on element in focus with an Enter key press
// Used for tab-through accessibility
document.onkeydown = function (e) {
	if (e.keyCode === 13) {
		// The Enter/Return key
		if (document.activeElement) {
			document.activeElement.click();
		}
	}
};
