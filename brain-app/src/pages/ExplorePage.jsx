import { useState } from 'react'
import TopicCard from '../components/TopicCard'
import { topics } from '../data/topics.js'

export default function ExplorePage() {

    const [chosen, setChosen] = useState("")

    {/* Using .find() method to find the topic id of the topic that was chosen and converted to a Number (since id is a number) before getting the topic details */}
    const topic = topics.find(topic => topic.id === Number(chosen));

    return (
        <section>

            <div>            
            
                <h2>Get information on different topics</h2>
                
                <select value={chosen} onChange={e => setChosen(e.target.value)} >
                    <option value="">Choose a topic</option>
                    {topics.map(topic => (
                        <option key={topic.id} value={topic.id} >{topic.name}</option>
                    ))}
                </select>

            </div>

            {/* Animation to display a topic card when a topic has been chosen */}
            { topic && (
                <div className='fade-in-element' key={chosen}>
                    <TopicCard {...topic} />
                </div>
            )}

        </section>
    )
}