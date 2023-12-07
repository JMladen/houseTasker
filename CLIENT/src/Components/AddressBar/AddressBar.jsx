import './AddressBar.scss'
import axios from 'axios'

function AddressBar () {


    function handleSubmit (e){

        e.preventDefault()

        const url = "http://localhost:5000"
        const address = e.target.address.value
        
        
        async function fillCalender(){
            const { data } = await axios.get(`${url}/${address}`)
            console.log(data)
        }
        
        fillCalender()
        
    }
        
        return(
            <form action='submit' className="address-bar" onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" name="address" placeholder='search home schedule by address' />
            <button type='submit'>Search</button>
            </form>
    )
}

export default AddressBar