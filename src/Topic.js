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
    points() {
        return this.props.points.map((p, i) => {
            return <Point key={i} title={p.title} description={p.description} />
        })
    }

    pointList() {
        if (this.props.points[0].title) {
            return <dl>{ this.points() }</dl>
        } else {
            return <ul>{ this.points() }</ul>
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