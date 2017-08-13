import React from 'react'

export default class Footer extends React.Component {
    constructor() {
        super()
		this.state = { expanded: false}

		this.toggleInfo = this.toggleInfo.bind(this);
	}

	toggleInfo() {
		this.setState(prevState => {
			return {expanded: !prevState.expanded}
		})
	}

	render() {
		let footer = <footer>
			<p>This webpage is hosted on <a href='https://github.com/michaelmosher/michaelmosher.github.io'>GitHub</a>.</p>
			<a onClick={this.toggleInfo}>Want to know more?</a>
		</footer>

		if (this.state.expanded) {
			const expandedInfoStyle = {
				backgroundColor: '#000050',
				border: 'solid #000030 4px',
				margin: '0 auto',
				padding: '5px'
			}

			footer = <footer>
				<div className='large card' style={expandedInfoStyle}>
					<p>This webpage is hosted on <a href='https://github.com/michaelmosher/michaelmosher.github.io'>GitHub</a>.</p>
					<p>My <a href='https://github.com/michaelmosher/LatexResume/blob/master/mosherResume.pdf'>resum&#233;</a> is hosted on <a href='https://github.com/michaelmosher/LatexResume'>GitHub</a> as well.</p>
					<p>Want to talk? Email me at <a href='mailto:mmosher47@gmail.com' target='_top'>mmosher47@gmail.com</a>.</p>
					<a onClick={this.toggleInfo}>Want to know less?</a>
				</div>
			</footer>
		}

		return footer
	}
}