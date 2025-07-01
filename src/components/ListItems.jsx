import React from 'react'
import Item from './item'

const ListItems = ({items, onDeleteItem, completedItem, onEditItem}) => {
    return (
        <>
            <ul>
                {items.map((item) => {
                    const {id, content, completed} = item
                    return <Item key={id} id={id} content={content} completed={completed}
                        onDeleteItem={onDeleteItem} completedItem={completedItem}
                        onEditItem={onEditItem} />
                })}
            </ul>
        </>
    )
}

export default ListItems