<script>
	// You can add any script logic here if needed
</script>

<body>
	<h1 class="We-Love-Web">We Love Web</h1>

	<main>
		<section>
			<h1>Scrum crash course</h1>
			<time datetime="29/05/2023">29/05/2023</time>
			<img src="/assets/scrum.jpg" alt="scrum" />
			<h2>Notes</h2>
			<p>Important fundamentals:</p>
			<ul>
				<li>Sprint reviews</li>
				<li>Sprint retrospective</li>
				<li>Daily Scrum</li>
			</ul>
			<p>Scrum team composition:</p>
			<ul>
				<li>Developers</li>
				<li>Scrum master</li>
				<li>Product owner</li>
			</ul>
		</section>

		<section>
			<h1>Code Meetup</h1>
			<time datetime="06/03/2023">06/03/2023</time>
			<img src="/assets/code.jpg" alt="code" />
			<h2>Notes</h2>
			<p>Speakers:</p>
			<ul>
				<li>Kent C. Dodds</li>
				<li>Antoinne Poiret</li>
			</ul>
			<p>Subject:</p>
			<ul>
				<li>Remix</li>
				<li>Qwik</li>
				<li>Server-side rendering</li>
			</ul>
		</section>

		<section>
			<h1>Event</h1>
			<time datetime="06/03/2023">Date</time>

			<img src="/assets/code.jpg" alt="code" />
			<h2>Notes</h2>
		</section>

		<section>
			<h1>Event</h1>
			<time datetime="06/03/2023">Date</time>

			<img src="/assets/code.jpg" alt="code" />
			<h2>Notes</h2>
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

    .We-Love-Web:hover {
		transform: scale(1.2);
        transition-duration: 2s;
	}

	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr); /* Two columns */
		grid-template-rows: repeat(2, auto); /* Two rows */
		gap: 20px;
	}

	section {
		border: 1px solid #ddd;
		padding: 20px;
		margin: 0;
		background-color: #a2dd2c;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	h1 {
		margin-top: 0;
		color: rgb(246, 31, 242);
	}

	h2 {
		color: #4a90e2; /* Blue text color */
	}

	img {
		max-width: 100%;
		height: auto;
		border-radius: 8px; /* Optional: Add a border-radius for rounded corners */
	}

	ul {
		list-style-type: none;
		padding: 0;
	}
</style>
