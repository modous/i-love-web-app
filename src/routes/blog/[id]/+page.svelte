<script>
	export let data;
	import Header from '$lib/components/header/header.svelte';
	console.log(data);
	console.log('notes', data.notes);
</script>

<body>
	<Header />

	<main>
		{#if data.blogs}
			{#each data.blogs as { notes, title, date, image } (title)}
				<section class="blog">
					<h2>{title}</h2>
					<date>{date}</date>
					<div class="imageNotes">
						<img src={image.url} alt="event plaatje" loading="lazy" />
						<div>
							<h2 class="notesHeader">-Notes-</h2>
							<p class="notes">{@html notes.html}</p>
						</div>
					</div>
				</section>
			{/each}
		{:else}
			<p>Post not found.</p>
		{/if}
	</main>
</body>

<style>
	body {
		margin: 0px;
	}

	.notes {
		margin: 20px;
	}

	.notesHeader {
		text-align: center;
	}

	date {
		padding-bottom: 1rem;
	}
	h2 {
		margin-top: 0;
		color: orange;
	}

	h2 {
		/* color: #4a90e2;  */
		color: orange;
	}

	img {
		margin-left: 10px;
		max-width: 100%;
		height: 400px;
		width: 400px; /* Adjust this percentage as needed */
		border-radius: 8px; /* Optional: Add a border-radius for rounded corners */
		transition: transform 2s;
	}

	img:hover {
		transform: scale(1.1);
		transition-duration: 2s;
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
		margin: 2rem;

		box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
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

	.imageNotes {
		display: flex;
		flex-direction: row;
	}
</style>
