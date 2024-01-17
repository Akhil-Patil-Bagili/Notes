import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateNote} from './components/CreateNote'
import {Notes} from './components/Notes'

function App() {

  const [notes, setNotes] = useState([])

  fetch("http://localhost:3000/notes")
    .then(async function(res){
        const json = await res.json()
        setNotes(json.notes)
    })
  return (
    <div>
      <CreateNote></CreateNote>
      <Notes notes={notes}></Notes>
    </div>
  )
}

export default App
