export function createActionCreators(
	type,
	payload = undefined,
	error = null,
	meta = null
) {
	return { type, payload, error, meta };
}
