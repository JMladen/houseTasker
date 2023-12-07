import AddressBar from './Components/AddressBar/AddressBar.jsx'
import CalenderForm from './Components/CalenderForm/CalenderForm.jsx' // intellissense didnt work
import NewHomeForm from './Components/NewHomeForm/NewHomeForm.jsx'
import Nav from './Components/Nav/Nav.jsx'
import './App.scss'

function App() {

  return (
    <>
    <main className='main'>
    < Nav/>
      < NewHomeForm />
     <CalenderForm />
    </main>
    <div className='other'>
     <AddressBar />
    </div>
    </>
  )
}

export default App
