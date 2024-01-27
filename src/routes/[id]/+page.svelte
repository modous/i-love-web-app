<script>
	export let data;
</script>

<main>
	<section>
		<div class="container">
			{#if data.blog}
				<section class="blog">
					<h2>{data.title}</h2>
					<date>{data.date}</date>
					<img src={data.image.url} alt="" />
					<p>{@html data.notes.html}</p>
				</section>
			{:else}
				<p>Post not found.</p>
			{/if}
		</div>
	</section>
</main>
