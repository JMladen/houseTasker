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

    async function getExistingHouse (e){
        const url = "http://localhost:5000"
        const address = e.target.address.value
        
            const {data} = await axios.get(`${url}/${address}`)
            console.log(data.weeks[0])
    }
    

    function handleSearch (e) {
        e.preventDefault()
        getExistingHouse(e)
    }

    return(

        <section>

            <form action="submit" onSubmit={(e) => handleNewHouseSubmit(e)}>
                <label htmlFor="address">Address:</label>
                <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                required
                />
                <label htmlFor="residents">First Name of each Resident:</label>
                <input
                type="text"
                id="residents"
                name="residents"
                placeholder="Enter the home's residents"
                required
                />
                <button type="submit">Submit</button>
            </form>

                <form action="submit" onSubmit={(e)=>{handleSearch(e)}}>
                    <label>Search for existing address:</label>
                    <input
                    type="text"
                    name="address"
                    className="search-input"
                    placeholder="Search..."
                    />
                    <button type="submit">Search</button>
                </form>
          </section>
    )
}

export default NewHomeForm