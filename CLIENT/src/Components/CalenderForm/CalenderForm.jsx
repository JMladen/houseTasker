import "./CalenderForm.scss";
import axios from "axios";


const CalenderForm = () => {

  async function handleSubmit(e) { //make new week
    e.preventDefault();
    const url = "http://localhost:5000"
    const address = e.target.address.value

    await axios.post(`${url}/${address}`, {
      monday: e.target.monday.value,
      tuesday: e.target.tuesday.value,
      wednesday: e.target.wednesday.value,
      thursday: e.target.thursday.value,
      friday: e.target.friday.value,
      saturday: e.target.saturday.value,
      sunday: e.target.sunday.value,

    }).then((response) => {
        console.log(response)
    });
  }
///test code
//again everything


  return (
    <>
    <h2>Make A New Schedule For The Week:</h2>  
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="address">Address</label>
       <input type="text" id="address" name="address" placeholder="...your address" />
       <label htmlFor="monday">Monday</label>
       <input type="text" id="monday" name="monday" placeholder="...tasks and chores"/>
       <label htmlFor="tuesday">Tuesday</label>
       <input type="text" id="tuesday" name="tuesday"  placeholder="...tasks and chores"/>
       <label htmlFor="wednesday">Wednesday</label>
       <input type="text" id="wednesday" name="wednesday" placeholder="...tasks and chores" />
       <label htmlFor="thursday">Thursday</label>
       <input type="text" id="thursday" name="thursday"  placeholder="...tasks and chores"/>
       <label htmlFor="friday">Friday</label>
       <input type="text" id="friday" name="friday" placeholder="...tasks and chores" />
       <label htmlFor="saturday">Saturday</label>
       <input type="text" id="saturday" name="saturday"  placeholder="...tasks and chores"/>
       <label htmlFor="sunday">Sunday</label>
       <input type="text" id="sunday" name="sunday"  placeholder="...tasks and chores"/>

       <button type="submit">submit</button>
     </form>
    </>

  );
};

export default CalenderForm;
