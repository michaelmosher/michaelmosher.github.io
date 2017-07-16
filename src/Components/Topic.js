import React from 'react'
import { Point } from './Point'

const topicStyle = {
    // width: '804px',
    backgroundColor: '#000050',
    border: 'solid #000030 4px',
    padding: '5px',
    margin: '0 0 10px'
}

const listStyle = {
    borderTop: 'solid #CFCCE3 1px',
    margingTop: '3px'
}

export class Topic extends React.Component {
    pointList() {
        if (this.props.listType !== 'unordered') {
            return <dl style={listStyle} >{ this.props.children }</dl>
        } else {
            return <ul style={listStyle} >{ this.props.children }</ul>
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
