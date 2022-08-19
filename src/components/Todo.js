import React, { useState } from 'react'
import img1 from "../images/todo.jpg"
import styles from "../styles/Todo_list.module.css"

const Todo = () => {
  const [inputdata, setInputdata] = useState('');
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputdata) {

    } else {
      setItems([...items, inputdata]);
      setInputdata(''); 
    }

  }
  // delete item
  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);


  }
  // remove all
  const removeAll = () => {
    setItems([]);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgDiv}>
          <img src={img1} alt="todologo" />
        </div>
        <h2>Add your List here ✌</h2>
        <div className={styles.inputDiv}>
          <input type="text" placeholder='✍ Add items...' value={inputdata} onChange={(e) => setInputdata(e.target.value)} />
          <i className="fas fa-plus add-btn" title='Add Item' onClick={addItem}></i>
        </div>
        <div className={styles.showItems}>

          {
            items.map((elem, ind) => {
              return (
                <div key={ind}>
                  <h3>{elem}</h3>
                  <i className="fas fa-trash-alt add-btn" title='Delete Item' onClick={() => deleteItem(ind)}></i>
                </div>
              )
            })
          }



        </div>



        <div className={styles.btnDiv}>
          <button onClick={removeAll}>REMOVE ALL</button>
        </div>
      </div>

    </>
  )
}

export default Todo