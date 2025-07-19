import { Link } from 'react-router-dom'
import Neuron from '../assets/Neuron.gif'
import NeuralConnections from '../assets/NeuralConnections.jpg'
import { milestones } from '../data/milestones'
import TableRow from '../components/TableRow'
import { aboutText } from '../data/texts'


export default function AboutPage() {
    return (
        <section>
            <div>
            
                <img src={Neuron} alt="A neuron gif showing a signal traveling through the axon and spreading in dendrites" className='neuron-img'/>
                
                <p>{ aboutText }</p>
                
                <img src={NeuralConnections} alt="Synapse density over time from newborn, 1 month, 9 months, 2 years, to an adult" className='neural-connections-img'/>
            
            </div>

            <table>
                <caption>Table of content</caption>
                <thead>
                    <tr>
                        <th className='narrow-col' >Age</th>
                        <th>Milestone</th>
                    </tr>
                </thead>
                <tbody>
                    {milestones.map((item, index) => (
                        <TableRow key={index} age={item.age} milestone={item.milestone} />
                    ))}
                </tbody>
            </table>
            
            <Link to="/explore">
                <button>Explore more...</button>
            </Link>

        </section>
    )
}