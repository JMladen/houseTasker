import './AddressBar.scss'
import axios from 'axios'
import WeeklyCalender from '../WeeklyCalendar/WeeklyCalendar'
import { useState } from 'react'

function AddressBar () {

    const [week, setWeek] = useState({})
    const [residents, setResidents] = useState({})

    function handleSubmit (e){

        e.preventDefault()

        const url = "http://localhost:5000"
        const address = e.target.address.value
        
        
        async function fillCalender(){
            const { data } = await axios.get(`${url}/${address}`)
            const week = data.weeks[e.target.week.value - 1]
            setWeek(week)
            setResidents(data.residents)
        }
        
        fillCalender()
        
    }
        
        return(

            <>

            <h2>Search Your Weekly Schedule</h2>
            <form action='submit' className="address-bar" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" placeholder='enter your address' />
            <label htmlFor="home">Week</label>
            <input type="text" name="week" placeholder='select a week'/>
            <button type='submit'>Display</button>
            </form>
            < WeeklyCalender week={week} residents={residents}/>

            </>
    )
}

export default AddressBar