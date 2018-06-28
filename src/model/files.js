export const readFile = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.onload = () => {
			let typedarray = new Uint8Array(reader.result)
			resolve(typedarray)
		}
		reader.onerror = (err) => {
			reject(err)
		}
		reader.readAsArrayBuffer(file)
	})
}
