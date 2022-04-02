export function genRandomNumber(len: number): number {
	return Math.floor(Math.pow(10, len - 1) + Math.random() * 9 * Math.pow(10, len - 1));
}

export function exportToJsonFile(jsonData: any, name: string = 'data.json') {
	let dataStr = JSON.stringify(jsonData);
	let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

	let exportFileDefaultName = name;

	let linkElement = document.createElement('a');
	linkElement.setAttribute('href', dataUri);
	linkElement.setAttribute('download', exportFileDefaultName);
	linkElement.click();
}
