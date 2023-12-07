import './AddressBar.scss'
import axios from 'axios'
import WeeklyCalender from '../WeeklyCalendar/WeeklyCalendar'
import { useState } from 'react'

function AddressBar () {

    const [week, setWeek] = useState({})

    function handleSubmit (e){

        e.preventDefault()

        const url = "http://localhost:5000"
        const address = e.target.address.value
        
        
        async function fillCalender(){
            const { data } = await axios.get(`${url}/${address}`)
            const week = data.weeks[e.target.week.value]
            setWeek(week)
            const humans = data.humans
            console.log(week, humans)
        }
        
        fillCalender()
        
    }
        
        return(

            <>
            <form action='submit' className="address-bar" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" placeholder='home week' />
            <label htmlFor="home">Week</label>
            <input type="text" name="week" placeholder='sreach week'/>
            <button type='submit'>search home by week</button>
            </form>
            < WeeklyCalender week={week} />

            </>
    )
}

export default AddressBar