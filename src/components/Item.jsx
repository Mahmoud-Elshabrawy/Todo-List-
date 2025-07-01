import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Item = ({ id, content, completed, onDeleteItem, completedItem, onEditItem }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [newContent, setNewContent] = useState(content)
    
    function handleEditSubmit() {
        if(newContent.trim() !== "" ) {
            onEditItem(id, newContent)
            setIsEditing(false)
        }
    }

  return (
    <>
        <li key={id} className='li'>
        <div className='item'>
            <div className='content' onClick={() => completedItem(id)}>
                <span className={`span ${completed ? 'completed' : ''}`}></span>
                <span className={`${completed ? 'line-through' : ''}`}>{content}</span>
            
            </div>
            <div>
            <FontAwesomeIcon icon={faPenToSquare} style={{color: '#000', marginRight: '5px'}}
                onClick={() => setIsEditing(true)}
                />

            <FontAwesomeIcon icon={faXmark} style={{ color: '#000', cursor: 'pointer' }}
                onClick={() => onDeleteItem(id)}
                />
            </div>
        </div>
        </li>
        {isEditing && (
            <div className='modal'>
                <div className='modal-content'>
                    <h3>Edit task</h3>
                    <input type="text" placeholder='Edit Your task' 
                        value={newContent} onChange={(e) => setNewContent(e.target.value)} autoFocus
                        />
                    <div className="modal-buttons">
                        <button className="save-btn" onClick={handleEditSubmit}>✔ Save</button>
                        <button className="cancel-btn" onClick={() => setIsEditing(false)}>✖ Cancel</button>
                    </div>
                </div>
            </div>
        )}
    
    </>
);
};

export default Item;
