import Button from './Button'

export default function CommentForm({
    name,
    text,
    onNameChange,
    onTextChange,
    onSubmit
}) {
    return (

        <form onSubmit={onSubmit}>
        
            <label>Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    placeholder="First name"
                    onChange={onNameChange}
                    required
            />
        
            <label>Comment:</label>
                <textarea
                    id="comment"
                    value={text}
                    placeholder="Share your thoughts"
                    onChange={onTextChange}
                    required
            />
        
            <Button type="submit" label="Submit" />
        
        </form>

    )
}