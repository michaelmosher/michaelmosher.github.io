<SectionHeader name="Work History" />
<WhiteBox>
	<section role="document">
		<div class="employer">
			<span>SpinDance, Inc</span>
			<span>Holland, MI</span>
		</div>
		<div class="job">
			<span>Software Engineer</span>
			<span class="dates">May 2018 - present</span>
		</div>
		<div class="job">
			<span>System Administrator</span>
			<span class="dates">August 2014 - May 2018</span>
		</div>
	</section>
	<section role="document">
		<div class="employer">
			<span>Prince Conference Center</span>
			<span>Grand Rapids, MI</span>
		</div>
		<div class="job">
			<span>Setup Crew</span>
			<span class="dates">October 2007 - September 2013</span>
		</div>
	</section>
</WhiteBox>

<script>
  export default {
    components: {
      SectionHeader: "./SectionHeader.svelte",
      WhiteBox: "./WhiteBox.svelte"
    }
  };
</script>

<style>
	section {
	  display: flex;
	  flex-direction: column;
	}

	section + section {
	  margin-top: 20px;
	}

	.employer {
	  margin-bottom: 10px;
	}

	.employer > span:first-child {
	  font-weight: bold;
	}

	.employer,
	.job {
	  display: flex;
	  flex-wrap: wrap;
	  align-items: center;
	  justify-content: space-between;
	}

	.dates {
	  margin-left: auto;
	}
</style>