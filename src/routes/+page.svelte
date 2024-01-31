<script>
	// You can add any script logic here if needed
	export let data;

	import Blog from '$lib/components/blog/blog.svelte';
	import Header from '$lib/components/header/header.svelte';
	// for (const blog of data.blogs) {
	// 	console.log(blog.id);
	// }
	console.log('biggg', data.blogs[0].id);
</script>

<head>
	<title>I Love Web</title>
</head>
<body>
	<Header />

	<main>
		<Blog {data} />
	</main>
</body>

<style>
	:root {
		font-family: 'Roboto', sans-serif;
		--color-primary: orange;
		--color-secondary: #440099;
	}
	body {
		margin: 0px;
	}

	@media (min-width: 655px) {
		main {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* Two columns */
			grid-template-rows: repeat(2, auto); /* Two rows */
		}
	}

	@media (min-width: 1011px) {
		main {
			display: grid;
			grid-template-columns: repeat(3, 1fr); /* Two columns */
			grid-template-rows: repeat(2, auto); /* Two rows */
		}
	}
</style>
