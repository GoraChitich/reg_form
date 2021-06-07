
export function generateID() {
	return `${Math.floor(Math.random() * 10000)}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}