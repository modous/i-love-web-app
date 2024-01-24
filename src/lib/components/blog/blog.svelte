<script>
	export let data;
	console.log('Ik ben hier:', data);
</script>

{#each data.blogs as { title, date, image, notes } (title)}
	<section class="blog">
		<h2>{title}</h2>
		<date>{date}</date>
		<div>
			<img src={image.url} alt="" />
			<h2>- Notes -</h2>
			<p>{@html notes.html}</p>
		</div>
	</section>
{/each}

<style>
	date {
		padding-bottom: 1rem;
	}

	h2 {
		/* color: #4a90e2;  */
		color: orange;
	}

	img {
		max-width: 80%;
		height: 50%;
		width: 50%; /* Adjust this percentage as needed */
		border-radius: 8px; /* Optional: Add a border-radius for rounded corners */
	}

	.blog:hover div {
		display: block;
		transition-duration: 3s;
		height: auto;
	}

	@media (min-width: 655px) {
		.blog div {
			display: none;
			overflow: hidden;
			height: 0;
		}
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
