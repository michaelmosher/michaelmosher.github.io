<script>
	import SectionHeader from "./SectionHeader.svelte"
	import WhiteBox from "./WhiteBox.svelte"
</script>

<style>
	dl {
		display: grid;
		grid-template-columns: 25% auto;
		grid-row-gap: 15px;
	}

	dt {
		font-weight: bold;
	}
</style>

<SectionHeader name="Projects" />
<WhiteBox>
	<dl role="document">
		<dt>emBot</dt>
		<dd>This is a ChatOps bot that handles common IT tasks directly in Slack and Hangouts. It's built in TypeScript, using
			the Slack API. It also utilizes AWS Lex, Amazon's natural language processor, to understand incoming IT requests.</dd>
		<dt>ZenossWeb</dt>
		<dd>A PWA written in Elm for interacting with Zenoss monitoring software. It lets you view and acknowledge active alerts
			and server metrics.</dd>
		<dt>Retrospective</dt>
		<dd>An Elm web app for facilitating a start/stop/continue retrospective session.</dd>
		<dt>Treader</dt>
		<dd>This is a CLI tool written in Golang for simplifying CSV time entries. This was built to create a smoother transition
			between Caato's Time Tracker and OpenAir's expected input.</dd>
		<dt>ActionTracker</dt>
		<dd>(Work in Progress) This is an Android Kotlin app that tracks frequency of recurring actions.</dd>
	</dl>
</WhiteBox>