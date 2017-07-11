import React from 'react'
import ReactDOM from 'react-dom'
import { Topic } from './Topic'
import { Point } from './Point'

ReactDOM.render(
    <div>
        <aside style={{float: 'right'}}>
            <img id="profile" src="./profile.jpg" alt="profile picture" />
        </aside>
        <summary>
            <h2><span>&ldquo;</span>Well Met!<span>&rdquo;</span></h2>
				<p>"Welcome to my github page. Hopefully you're here to learn more about who I am. Where to begin?" </p><br/>
        </summary>
        <section>
            <Topic title="Things I enjoy">
                <Point title='Logic' description='when cause leads to effect in a predictable and controllable way.' />
                <Point title='Planning' description='setting a goal, choosing a strategy, and carrying out its steps to achieve the goal.' />
                <Point title='Attending to the details' description='identifying and handling the small things that make the biggest difference.' />
            </Topic>
        </section>
        <section>
            <Topic title="Skills I've acquired doing the things I enjoy">
                <Point title='Math' description='equal parts logic, planning out the solution in advance, and avoiding little mistakes.' />
                <Point title='Saxophone' description='learning music is all preparation; performing is all details.' />
                <Point title='Games' description="adapting familiar strategies to overcome unfamiliar challenges and achieve the game's goals." />
            </Topic>
        </section>
        <section>
            <Topic title="More skills I'm planning to acquire soon">
                <Point title='Woodworking' description="it's like math, except you end up with a new table." />
                <Point title='Web Design' description="designing, planning, measuring, and building—it's like woodworking on a computer." />
            </Topic>
        </section>
        <section>
            <Topic title="Other trivia about me" listType='unordered'>
                <Point description='Breakfast burritos are my specialty in the kitchen.' />
                <Point description='I never impulsively buy clothing, except a Mountain Dew bathing suit from Walmart.' />
                <Point description='The eleventh Doctor is the best Doctor.' />
            </Topic>
        </section>
    </div>,

    document.getElementById('react-main')
)

// header and footer?
