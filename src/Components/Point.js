import React from 'react';

export class Point extends React.Component {
    render() {
        const dtStyle = {
            color: '#FF8C00',
            fontWeight: 'bold',
            float: 'left',
            clear: 'left'
        }

        if (this.props.title) {
            return (
                <div className='Point'>
                    <dt style={dtStyle} >{this.props.title}</dt>
                    <dd style={{marginLeft: '40px'}} >—{this.props.description}</dd>
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
