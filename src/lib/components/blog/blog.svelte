<script>
	export let data;
	console.log('Ik ben hier:', data.id);

	// function spaNavigate(data) {
	// 	// Fallback for browsers that don't support this API:
	// 	if (!document.startViewTransition) {
	// 		updateTheDOMSomehow(data);
	// 		return;
	// 	}

	// 	// With a transition:
	// 	document.startViewTransition(() => updateTheDOMSomehow(data));
	// }
</script>

{#each data.blogs as { title, date, image, notes } (title)}
	<section class="blog">
		<h2>{title}</h2>
		<date>{date}</date>
		<img src={image.url} alt="event plaatje" loading="lazy" />
		<a class="readMore" href="blog/{data.id}">read more ></a>
	</section>
{/each}

<style>
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
		margin-left: 20px;
		max-width: 100%;
		height: 200px;
		width: 200px; /* Adjust this percentage as needed */
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

	.readMore {
		color: orange;
		text-decoration: none;
		padding: 10px;
		max-width: 100px;
		transition: transform 2s;
	}
	.readMore:hover {
		transform: scale(1.2);
		transition-duration: 2s;
	}

	/* View transitions */

	::view-transition-old(root),
	::view-transition-new(root) {
		animation-duration: 5s;
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
