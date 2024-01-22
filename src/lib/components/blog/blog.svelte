<script>
	export let data;
	console.log('Ik ben hier:', data);
</script>

{#each data.blogs as { title, date, image, notes } (title)}
	<section class="blog">
		<h1>{title}</h1>
		<date>{date}</date>
		<img src={image.url} alt="" />
		<h2>- Notes -</h2>
		<p>{@html notes.html}</p>
	</section>
{/each}

<style>
	date{
        padding: 1rem;
    }
	h1 {
		margin-top: 0;
		color: orange;
	}

	h2 {
		/* color: #4a90e2;  */
		color: orange;
	}

	img {
		max-width: 80%;
		height: 400px;
		width: 400px; /* Adjust this percentage as needed */
		border-radius: 8px; /* Optional: Add a border-radius for rounded corners */
	}


	section {
		display: flex;
		flex-direction: column;
		color: white;
		border: 1px solid #ddd;
		padding: 20px;
		margin: 0;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 1rem;

		margin-top: 2rem;
		background-color: #440099;
	}

	.blog {
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
