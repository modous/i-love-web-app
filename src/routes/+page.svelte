<script>
	// You can add any script logic here if needed
	export let data;

	import Blog from '$lib/components/blog/blog.svelte';

	console.log(data);
</script>

<body>
	<section class="header box box-inner">
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
	</section>

	<main>
		<Blog {data} />
	</main>
</body>

<style>
	:root {
		font-family: 'Roboto', sans-serif;
	}
	body {
		margin: 0px;
	}

	.header {
		background-color: black;
	}
	.We-Love-Web {
		text-align: center;
		color: white;
		animation-name: scale;
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}

	@keyframes scale {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.3);
			color: #440099;
		}
		100% {
			transform: scale(1);
		}
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

	@media (min-width: 655px) {
		main {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* Two columns */
			grid-template-rows: repeat(2, auto); /* Two rows */
		}
	}

	section {
		padding: 20px;
		margin: 0;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.box {
		position: relative;
		width: 50%;
		height: 50%;
	}

	.box:hover:before {
		transform: translate(-50%, -50%) scale(1);
		filter: blur(50px);
	}
	.box-inner {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.box:before,
	.box-inner {
		background-color: #440099;
		box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.58);

		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e"),
			url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e"),
			url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e");
		background-repeat: repeat-x;
		background-size: 1600px 50%;
		background-position:
			0 130%,
			-50px 130%,
			500px 130%;

		animation: 20s waves linear infinite forwards;
	}

	@keyframes waves {
		to {
			background-position:
				1600px 130%,
				3150px 130%,
				5300px 130%;
		}
	}
</style>
