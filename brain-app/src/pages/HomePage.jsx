import { Link } from 'react-router-dom'
import DancingNeuron from '../assets/DancingNeuron.gif'
import BrainPower from '../assets/BrainPower.mp4'

export default function HomePage() {
    return (
        <section>
            
            <h2>Introduction</h2>
            {/* <img src={DancingNeuron} alt="Dancing Neuron gif" /> */}
            
            <p>This is the introduction paragraph</p>
            
            <button>Show more</button>
            
            <p>This is the extended paragraph</p>
            {/* <>
                <video src={BrainPower}></video>
                <p>Source: Tiffany Shlain and Let It Ripple Studio</p>
            </> */}
            
            <Link to="/explore">
                <button>Explore more</button>
            </Link>

        </section>
    )
}