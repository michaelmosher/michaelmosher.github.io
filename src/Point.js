import React from 'react';

export class Point extends React.Component {
    render() {
        if (this.props.title) {
            return (
                <div className='Point'>
                    <dt>{this.props.title}</dt>
                    <dd>—{this.props.description}</dd>
                </div>
            )
        } else {
            return (
                <div className='Point'>
                    <li>{this.props.description}</li>
                </div>
            )
        }
    }
}
