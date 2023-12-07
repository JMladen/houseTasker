
import './App.css'
import axios from 'axios'

import CalenderForm from './Components/CalenderForm/CalenderFrom' // intellissense didnt work

function App() {

  const url = "http://localhost:5000"
  const address = "234"

  async function fillCalender(){
    const { data } = await axios.get(`${url}/${address}`)
    console.log(data)
  }

  fillCalender()

  return (
    <>
     <CalenderForm />
    </>
  )
}

export default App
