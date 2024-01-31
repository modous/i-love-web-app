import { HYGRAPH_URL, HYGRAPH_KEY } from '$env/static/private';


export async function load({}) {
	const query = `
		query myQuery {
			blogs {
				id
				title
				date
				image {
					url
				}
			}
		}
	`;

	// const request = await hygraph.request(query);
	const request = await client({ query, fetch: fetch, endpoint: HYGRAPH_URL, HYGRAPH_KEY });

	
	// console.log('rat', request);	
	return {
		blogs: request.blogs
	};
}

async function client({ query, variables, fetch, endpoint, headers = {} }) {
	const response = await fetch(endpoint, {
		method: 'POST',
		body: JSON.stringify({ query, variables }),
		headers: headers
	});

	const { data } = await response.json();

	return data;
}
