import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load({ params }) {
	// Extract the slug from the params
	const { id } = params;

	// Define your GraphQL query with a filter for the specific slug
	const query = gql`
		query myQuery($id: ID!) {
			blogs(where: { id: $id }) {
				id
				title
				date
				notes {
					text
				}
				image {
					url
				}
			}
		}
	`;
	const variables = { id };

	const request = await hygraph.request(query, variables);

	return {
		blog: request.blog // Hier halen we de enkele wens op
	};

	// try {
	// 	// Execute the GraphQL query with the variable
	// 	const data = await hygraph.request(query, variables);

	// 	console.log('GraphQL data:', data); // Log the data received from GraphQL

	// 	// Check if any workshops are found
	// 	if (data.blogs.length > 0) {
	// 		const foundBlog = data.blogs.find((blogs) => blogs.blogsID === id);

	// 		// Check if a workshop with the matching slug is found
	// 		if (foundBlog) {
	// 			// console.log('Workshop found:', foundWorkshop); // Log the workshop found

	// 			return {
	// 				blogs: foundBlog
	// 			};
	// 		} else {
	// 			console.log('Blog not found for the provided id'); // Log that no workshop was found
	// 			return {
	// 				status: 404,
	// 				error: 'Blog not found'
	// 			};
	// 		}
	// 	} else {
	// 		console.log('No Blogs found'); // Log that no workshops were found
	// 		return {
	// 			status: 404,
	// 			error: 'No workshops found'
	// 		};
	// 	}
	// } catch (error) {
	// 	// Handle any GraphQL request errors here
	// 	console.error('GraphQL request error:', error);
	// 	return {
	// 		status: 500,
	// 		error: 'Internal server error'
	// 	};
	// }
}
