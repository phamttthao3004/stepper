const GLOBAL_FUNCTIONS = new (function() {
	this.SetObject = (state, newState) => {
		const obj = Object.assign({}, state);
		if (newState !== undefined) {
			const keys = Object.keys(newState);
			keys.forEach(k => {
				obj[k] = newState[k];
			});
		}
		return obj;
	};
})();

export default GLOBAL_FUNCTIONS;
