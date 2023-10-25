
import './index.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import ListComponent from './ListComponent'
import { useState } from 'react'



 function App() {
  const [items, setItem] = useState([
    {
      id:1, checked: false,
      item: 'Reactjs'
    },
    {
      id:2, checked: false,
      item: 'Reactjs'
    },
    {
      id:3, checked: false,
      item: 'Reactjs'
    }

  ])


  return (
    <div className='App'>
      
      
          {/* Hello {handleNameChange()}  */}
          < Header />
          < Content />
          < Footer />
         
          
          
          
       
      
      
    </div>
  )
}

export default App
