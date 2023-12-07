import AddressBar from './Components/AddressBar/AddressBar.jsx'
import CalenderForm from './Components/CalenderForm/CalenderForm.jsx' // intellissense didnt work
import NewHomeForm from './Components/NewHomeForm/NewHomeForm.jsx'
import './App.scss'

function App() {

  return (
    <>
   <NewHomeForm />
     <CalenderForm />
     <AddressBar />
     {/* weekly schedlue */}
    </>
  )
}

export default App
