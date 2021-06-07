
export function generateID() {
	return `${Math.floor(Math.random() * 10000)}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export function getDateFromFormat(dateFormat){
	return new Date(Number(dateFormat.substr(0,4)),Number(dateFormat.substr(5,2))-1,dateFormat.substr(8,2))
}