import React, { useState } from 'react'
import { BsTrash3 } from 'react-icons/bs'


const Content = () => {
   const [items, setItems] = useState([

    {
        id: 1,
        checked: false,
        item: 'ReactJs'
    },
    {
        id: 2,
        checked: true,
        item: 'Javascript'
    },
    {
        id: 3,
        checked: false,
        item: 'NodeJs'
    },

    ])

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id?{...item, checked: !item.checked} : item)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }


    return (
        <main>
            {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>

                        <label style={(item.checked) ? {textDecoration: "line-through"} : null} onDoubleClick={() => handleCheck(item.id)}>
                            {item.item}
                        </label>
                        <BsTrash3
                        onClick={() =>handleDelete(item.id)} 
                        role='button' tabIndex='0' />
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{marginTop: "2rem"}}>Your List is Empty</p>
            )}
        </main>
    )
}

export default Content