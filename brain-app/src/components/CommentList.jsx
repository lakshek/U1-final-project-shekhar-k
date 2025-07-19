import Button from './Button'

export default function CommentList({ comments, onEdit, onDelete }) {
    return (

        <div>
            <h3>Comments</h3>

            {comments.length === 0 ? (
                <p>Be the first one to comment</p>
            ) : (
                <ul className='comment-ul' >
                    {comments.map((comment, index) => (
                        <li key={index} className='comment-li'>
                            <strong>{comment.name}</strong>
                            <p>{comment.text}</p>
                            <Button label="Edit" onClick={() => onEdit(index)} />
                            <Button label="Delete" onClick={() => onDelete(index)} />
                        </li>
                    ))}
                </ul>
            )}

        </div>

    )
}