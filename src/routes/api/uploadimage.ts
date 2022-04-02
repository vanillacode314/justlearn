import dotenv from 'dotenv';
dotenv.config();

export async function post({ request }) {
	const url = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_APIKEY}`;
	const body = await request.formData();
	const res = await fetch(url, {
		method: 'POST',
		body: body
	});
	if (res.ok) {
		const data = await res.json();
		return {
			status: 200,
			body: data.data.display_url
		};
	} else {
		return {
			status: res.status,
			body: res.statusText
		};
	}
}
