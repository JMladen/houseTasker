import axios from "axios"


function NewHomeForm (){
    
    


    function handleNewHouseSubmit (e) {
        e.preventDefault()

        async function  makenNewHouse(e) { //make new week

            const residents = e.target.residents.value.split(' ')

            const url = "http://localhost:5000"
        
            await axios.post(`${url}/`, {
              address : e.target.address.value,
              residents : residents
        
            }).then((response) => {
                console.log(response)
            });
          }
        makenNewHouse(e)
    }

    return(

        <section>
            <h2>New Here? Create A New House!</h2>
            <form action="submit" onSubmit={(e) => handleNewHouseSubmit(e)}>
                <label htmlFor="address">Address:</label>
                <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                required
                />
                <label htmlFor="residents">Each Resident First Name:</label>
                <input
                type="text"
                id="residents"
                name="residents"
                placeholder="Enter the home's residents"
                required
                />
                <button type="submit">CREATE</button>
            </form>
          </section>
    )
}

export default NewHomeForm