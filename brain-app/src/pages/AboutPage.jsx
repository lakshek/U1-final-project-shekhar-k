import { Link } from 'react-router-dom'
import Neuron from '../assets/Neuron.gif'
import NeuralConnections from '../assets/NeuralConnections.jpg'

export default function AboutPage() {
    return (
        <section>

            {/* <img src={Neuron} alt="Neuron image"/> */}
            
            <p>This is the static information informing the users</p>
            
            {/* <img src={NeuralConnections} alt="Neural Connections image" /> */}
            
            <table>
                <caption>Table of content</caption>
                <thead>
                    <tr>
                        <th>Age</th>
                        <th>Milestone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0-3 months</td>
                        <td>Vision + sensory</td>
                    </tr>
                    <tr>
                        <td>3-6 months</td>
                        <td>Body awareness begins</td>
                    </tr>
                </tbody>
            </table>
            
            <Link to="/explore">
                <button>Explore more...</button>
            </Link>
            
        </section>
    )
}