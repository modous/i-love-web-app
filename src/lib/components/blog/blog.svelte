<script>
	export let data;
	console.log('Ik ben hier:', data);
</script>

{#each data.blogs as { title, date, image, notes } (title)}
	<section>
		<h1>{title}</h1>
		<date>{date}</date>
		<img src={image.url} alt="" />
		<h2>- Notes -</h2>
		<p>{@html notes.html}</p>
	</section>
{/each}

<style>
	h1 {
		margin-top: 0;
		color: rgb(246, 31, 242);
	}

	h2 {
		/* color: #4a90e2;  */
		color: rgb(89, 44, 214);
	}

	img {
		max-width: 100%;
		/* max-height: 60%; */
		height: 500px;
		width: 100%; /* Adjust this percentage as needed */
		border-radius: 8px; /* Optional: Add a border-radius for rounded corners */
	}

	/* ul {
		list-style-type: none;
		padding: 0;
	} */

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
