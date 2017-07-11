import React from 'react'
import { Point } from './Point'

const topicStyle = {
    width: '804px',
    backgroundColor: '#000050',
    border: 'solid #000030 4px',
    padding: '5px',
    margin: '0 0 10px'
}

export class Topic extends React.Component {
    pointList() {
        if (this.props.listType !== 'unordered') {
            return <dl>{ this.props.children }</dl>
        } else {
            return <ul>{ this.props.children }</ul>
        }
    }

    render() {
        return (
            <div className='Topic' style={topicStyle}>
                <p>{this.props.title}</p>
                {this.pointList()}
            </div>
        )
    }
}
