<script>
    let x;
</script>

<style>
    section {
        display: flex;
        padding: 0;
    }

    img {
        width: 300px;
        height: 300px;
        align-self: center;
    }

    div {
        padding: 5vw 5vw 0;
        background-color: white;
    }

    dl {
        display: grid;
        grid-template-columns: 20% auto;
        grid-row-gap: 15px;
    }

    dt {
        font-weight: bold;
    }

    .speech-bubble {
        width: 200px;
        background-color: #ff8c00;
        border-radius: 20px;
        border-bottom-left-radius: 0;
        color: white;
        font-size: 30px;
        height: 30px;
        padding: 10px 0;
        margin-bottom: 30px;
        text-align: center;
    }
</style>

<svelte:window bind:innerWidth={x} />
<section role="article">
	{#if (x && x > 800)}
	    <img src="michael-mosher.jpg" alt="Michael Mosher Portrait - 2016" />
    {/if}
	<div role="document">
		<div class="speech-bubble">Well Met!</div>
		<p>Hello, I'm Michael. I'm a software engineer and mobile developer.</p>
		<p>I'm known by my colleagues as a versatile, efficient, and reliable person to work with. I do my best work collaborating
			with my team toward a common goal.</p>
		<dl class="social">
			<dt>Email</dt>
			<dd><a href="mailto:mmosher47@gmail.com">mmosher47@gmail.com</a></dd>
			<dt>Social</dt>
			<dd><a href="https://linkedin.com/in/michael--mosher">LinkedIn</a></dd>
		</dl>
	</div>
</section>
