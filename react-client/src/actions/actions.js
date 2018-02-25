export const sendForm = (form) => {
	return {
		type: 'SEND',
		data: form
	}
};