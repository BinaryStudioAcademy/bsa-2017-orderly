const debounce = (func, delay) => {
	let inDebounce = undefined;
	return function() {
		let context = this;
		let args = arguments;
		clearTimeout(inDebounce);
		return inDebounce = setTimeout(() => func.apply(context, args), delay);
	}
}

export {
	debounce
}