export default function TopicCard({ name, desc, img }) {
    return (
        <div className="topic-card">
            <img src={img} className="topic-img" alt={"${name} illustration"}/>
            <h3>{ name }</h3>
            <p>{ desc }</p>
        </div>
    )
}