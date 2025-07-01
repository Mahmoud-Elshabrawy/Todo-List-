import React, { useEffect } from 'react'

const Form = ({content, setContent, onAddItem}) => {

    function handleSubmit(e) {
        e.preventDefault()
        if(!content) {
            alert('You must add a value')
        } else {
            const newItem = {
                id: Date.now(),
                content,
                completed: false
            }
            onAddItem(newItem)
            setContent("")
        }

    }
    return (
    <form onSubmit={handleSubmit}>
        <div className="form-control">
            <input type="text" placeholder='Enter Your Task'
                value={content} onChange={(e) => setContent(e.target.value)}/>
            <button>Add</button>
        </div>
    </form>
    )
}

export default Form