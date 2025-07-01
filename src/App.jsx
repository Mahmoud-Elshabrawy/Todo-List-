import { useEffect, useState } from "react"
import Form from "./components/Form"
import ListItems from "./components/ListItems"
import Title from "./components/Title"

function App() {
  const [items, setItems] = useState([])
  const [content, setContent] = useState("")

  function addNewItem(item) {
    setItems((prevItems) => [...prevItems, item])
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }
  
  function completedItem(id) {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if(item.id === id) {
          return {...item, completed: !item.completed}
        }
          return item
      })
      return updatedItems
    })
  }

  function editItemContent(id, newContent) {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if(item.id === id) {
          return {...item, content: newContent}
        } else return item
      })
      return updatedItems
    })
  }
  return (
    <>
      <div className="container">
        <Title />
        <Form content={content} setContent={setContent} onAddItem={addNewItem} />
        <ListItems items={items} onDeleteItem={deleteItem}
          completedItem={completedItem} onEditItem={editItemContent} />
      </div>
    </>
  )
}

export default App;
