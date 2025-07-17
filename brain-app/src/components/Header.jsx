import { Link } from 'react-router-dom';
import BrainIcon from '../assets/BrainIcon.jpeg';

export default function Header() {
    return (
        <header>

            <div>
                {/* <img src={BrainIcon} alt="Brain Icon image" /> */}
                <h1>Wired to Learn</h1>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/comment">Comment</Link></li>
                </ul>
            </nav>

        </header>
    ) 
}