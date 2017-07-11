import React from 'react'
import ReactDOM from 'react-dom'
import { Topic } from './Topic'

ReactDOM.render(
    <div>
        <aside style={{float: 'right'}}>
            <img id="profile" src="/profile.jpg" alt="profile picture"/>
        </aside>
        <summary>
            <h2><span>&ldquo;</span>Well Met!<span>&rdquo;</span></h2>
				<p>Welcome to my github page. Hopefully you're here to learn more about who I am. Where to begin?</p><br/>
        </summary>
        <section>
            <Topic title="Things I enjoy" points={[
                {
                    title: 'Logic',
                    description: 'when cause leads to effect in a predictable and controllable way.'
                },
                {
                    title: 'Planning',
                    description: 'setting a goal, choosing a strategy, and carrying out its steps to achieve the goal.'
                },
                {
                    title: 'Attending to the details',
                    description: 'identifying and handling the small things that make the biggest difference.'
                },
            ]} />
        </section>
        <section>
            <Topic title="Skills I've acquired doing the things I enjoy" points={[
                {
                    title: 'Math',
                    description: 'equal parts logic, planning out the solution in advance, and avoiding little mistakes.'
                },
                {
                    title: 'Saxophone',
                    description: 'learning music is all preparation; performing is all details.'
                },
                {
                    title: 'Games',
                    description: 'adapting familiar strategies to overcome unfamiliar challenges and achieve the game\'s goals.'
                },
            ]} />
        </section>
        <section>
            <Topic title="More skills I'm planning to acquire soon" points={[
                {
                    title: 'Woodworking',
                    description: 'it\'s like math, except you end up with a new table.'
                },
                {
                    title: 'Web Design',
                    description: "designing, planning, measuring, and building—it's like woodworking on a computer."
                }
            ]} />
        </section>
        <section>
            <Topic title="Other trivia about me" points={[
                { description: 'Breakfast burritos are my specialty in the kitchen.'},
                { description: 'I never impulsively buy clothing, except a Mountain Dew bathing suit from Walmart.'},
                { description: 'The eleventh Doctor is the best Doctor.'}
            ]} />
        </section>
    </div>, 
    document.getElementById('react-main')
)

// header and footer?

