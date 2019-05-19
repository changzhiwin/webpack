/**
 *为了调试异步调用
 */

module.exports = function(moduleName, hook) {
	if (hook && hook.intercept) {
		hook.intercept({
			call: argsment => {
				//console.log(`start to call, source = ${argsment}`);
				let hookNames = hook.taps.map(tap => tap.name).join(" -|- ");
				console.log(
					`debug:hook ${moduleName}, ${
						hook.constructor.name
					} called, have taps are ${hookNames}`
				);
			}
		});
	}
};
