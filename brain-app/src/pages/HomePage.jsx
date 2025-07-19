import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import DancingNeuron from '../assets/DancingNeuron.gif'
import BrainIO from '../assets/BrainIO.jpg'
import BrainPower from '../assets/BrainPower.mp4'
import { homeExtendedText, homeIntroText1, homeIntroText2 } from '../data/texts'

export default function HomePage() {

    const [expanded, setExpanded] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);

    const showExpandedText = () => {
        setExpanded(true);
    };

    const handlePlayVideo = () => {
        setShowVideo(true);

        setTimeout(() => {
            videoRef.current?.play();
        }, 100);
    };

    return (
        <section>

            <div>

                <h2>Introduction</h2>
                <img src={DancingNeuron} alt="A neuron gif swinging the body side-to-side" className='dancing-neuron-img' />
                
                <p>{ homeIntroText1 }</p>
                <img src={BrainIO} alt='A human head silouette with brain getting input from one side and sending output on the other side' className='brain-io-img' />
                <p>{ homeIntroText2 }</p>

                <button onClick={showExpandedText} >Show more</button>

            </div>

            {expanded && (
                <div>

                    <p>{ homeExtendedText }</p>

                    {!showVideo && (<button onClick={handlePlayVideo} className='btn' >Curious?</button>)}
                    {showVideo && (
                        <>
                            <video 
                                ref={videoRef}
                                src={BrainPower}
                                controls
                                onEnded={() => setVideoEnded(true)}
                            >
                                Your browser does not support the video
                            </video>
                            <p>Source: Tiffany Shlain and Let It Ripple Studio</p>
                        </>
                    )}
                    {videoEnded && (
                        <Link to="/explore">
                            <button className='btn'>Explore more</button>
                        </Link>
                    )}

                </div>
            )}

        </section>
    )
}