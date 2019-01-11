<header>
	<div>
		{name}
	</div>
</header>

<style>
  header {
    color: #ff8c00;
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    text-transform: uppercase;
    text-align: center;

    display: inline-grid;
    grid-template-columns: auto 250px auto;
  }

  div {
    position: relative;
    grid-column-start: 2;
    grid-column-end: 3;
    background-color: #000040;
    padding: 10px 0;
    height: 30px;
  }

  div:before,
  div:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
  }

  div:before {
    left: -24px;
    border-right: 25px solid #000040;
  }

  div:after {
    right: -24px;
    border-left: 25px solid #000040;
  }
</style>
