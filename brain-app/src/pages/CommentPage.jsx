import { useState } from 'react'
import CommentForm from "../components/CommentForm"
import CommentList from "../components/CommentList"

export default function CommentPage() {

    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);

    const handleNameChange = (e) => setName(e.target.value);
    const handleTextChange = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name.trim() || !text.trim()) return;

        setComments([{name, text}, ...comments]);
        setName("");
        setText("");
    };

    const handleDelete = (index) => {
        setComments(comments.filter((comment, i) => i !== index));
    };

    const handleEdit = (index) => {
        const commentToEdit = comments[index];
        setName(commentToEdit.name);
        setText(commentToEdit.text);
        setComments((comments.filter((comment, i) => i !== index)));
    };

    return (
        <section>

            <div>
                <h2>Share your thoughts...</h2>
            </div>

            {/*
                - Created CommentForm, a reusable component
                - Used props to send and receive data
                - Used useState to track changes to Name, Text, or Submit
                - Created functions to handle those changes 
             */}

            <CommentForm 
                name={name}
                text={text}
                onNameChange={handleNameChange}
                onTextChange={handleTextChange}
                onSubmit={handleSubmit}
            />
            
            {/*
                - Created CommentList, another reusable component
                - Used props to send and receive data
                - Used useState to track if Edit or Delete were clicked
                - Created functions to handle those changes
            */}

            <CommentList 
                comments={comments}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

        </section>
    )
}