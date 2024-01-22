<script>
	// You can add any script logic here if needed
	export let data;

	import Blog from '$lib/components/blog/blog.svelte';

	console.log(data);
</script>

<body>
	<h1 class="We-Love-Web">
		<span>W</span>
		<span>e</span>
		<span> </span>
		<span>L</span>
		<span>o</span>
		<span>v</span>
		<span>e</span>
		<span> </span>
		<span>W</span>
		<span>e</span>
		<span>b</span>
	</h1>

	<main>
		<Blog {data} />
		
		<section>
			<h1>Event</h1>
			<time datetime="06/03/2023">Date</time>

			<img src="" alt="img" />
			<h2>- Notes -</h2>
		</section>
	</main>
</body>

<style>
	:root {
		font-family: 'Roboto', sans-serif;
	}
	.We-Love-Web {
		text-align: center;
		color: black;
	}

	.We-Love-Web span {
		display: inline-block;
		animation: spin 1s;
	}

	.We-Love-Web span:nth-child(1) {
		animation-delay: 0.1s;
	}
	.We-Love-Web span:nth-child(2) {
		animation-delay: 0.2s;
	}
	.We-Love-Web span:nth-child(4) {
		animation-delay: 0.3s;
	}
	.We-Love-Web span:nth-child(5) {
		animation-delay: 0.4s;
	}
	.We-Love-Web span:nth-child(5) {
		animation-delay: 0.5s;
	}
	.We-Love-Web span:nth-child(6) {
		animation-delay: 0.6s;
	}
	.We-Love-Web span:nth-child(7) {
		animation-delay: 0.7s;
	}
	.We-Love-Web span:nth-child(9) {
		animation-delay: 0.8s;
	}
	.We-Love-Web span:nth-child(10) {
		animation-delay: 0.9s;
	}
	.We-Love-Web span:nth-child(11) {
		animation-delay: 1s;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.We-Love-Web:hover {
		transform: scale(1.2);
		transition-duration: 2s;
	}

	main {
		gap: 20px;
	}

	@media (min-width: 655px) {
		main {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* Two columns */
			grid-template-rows: repeat(2, auto); /* Two rows */
		}
	}

	section {
		border: 1px solid #ddd;
		padding: 20px;
		margin: 0;
		background-color: #a2dd2c;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		animation: grow 2s;
	}

	@keyframes grow {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		100% {
			opacity: 100%;
			transform: scale(1);
		}
	}
</style>
