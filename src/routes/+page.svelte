<script>
	// You can add any script logic here if needed
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
		<section>
			<h1>Scrum crash course</h1>
			<time datetime="29/05/2023">29/05/2023</time>
			<img src="/assets/scrum.jpg" alt="scrum" />
			<h2>- Notes -</h2>
			<p>
				Lars gaf vandaag een presentatie in het eerstejaarscollege over hoe ze bij Funda de sprint
				review aanpakken en welke scrum fundamentals ze daarvoor gebruiken.
			</p>
			<p class="headline">Important fundamentals:</p>
			<ul>
				<li>- Sprint reviews</li>
				<li>- Sprint retrospective</li>
				<li>- Daily Scrum</li>
				<li>- Backlog refilement</li>
				<li>- Sprint planning</li>
				<li>- Backlog refinement</li>
			</ul>
			<p class="headline">Scrum team composition:</p>
			<ul>
				<li>- Developers</li>
				<li>- Scrum master</li>
				<li>- Product owner</li>
			</ul>
			<textarea name="" id="" cols="30" rows="10">typ hier je aantekeningen!</textarea>
		</section>

		<section>
			<h1>Code Meetup</h1>
			<time datetime="06/03/2023">06/03/2023</time>
			<img src="/assets/code.jpg" alt="code" />

			<h2>- Notes -</h2>
			<p>
				Ik was vandaag bij een Code meetup bij Digital IO waar mijn broer werkt. Hier kwamen 2
				sprekers uit America(Kent C. Dodds) en Belgie(Antionne Poiret).
			</p>
			<p class="headline">Speakers:</p>
			<ul>
				<li>- Kent C. Dodds</li>
				<li>- Antoinne Poiret</li>
			</ul>
			<p class="headline">Subject:</p>
			<ul>
				<li>- Remix</li>
				<li>- Qwik</li>
				<li>- Server-side rendering</li>
			</ul>
			<textarea name="" id="" cols="30" rows="10">Typ hier je aantekeningen!</textarea>
		</section>

		<section>
			<h1>Event</h1>
			<time datetime="06/03/2023">Date</time>

			<img src="" alt="img" />
			<h2>- Notes -</h2>

			<textarea name="" id="" cols="30" rows="10">Typ hier je aantekeningen!</textarea>
		</section>

		<section>
			<h1>Event</h1>
			<time datetime="06/03/2023">Date</time>

			<img src="" alt="img" />
			<h2>- Notes -</h2>

			<textarea name="" id="" cols="30" rows="10">Typ hier je aantekeningen!</textarea>
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

	.headline {
		font-weight: bold;
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
		height: auto;
		border-radius: 8px; /* Optional: Add a border-radius for rounded corners */
	}

	ul {
		list-style-type: none;
		padding: 0;
	}
</style>
