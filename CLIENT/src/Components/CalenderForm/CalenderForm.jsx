import "./CalenderForm.scss";
import axios from "axios";

 const baseUrl = "https://project-2-api.herokuapp.com";

const CalenderForm = ({ propslist }) => {

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

        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
       <label htmlFor="sunday">Sunday</label>
       <input type="text" id="sunday" name="sunday" />
       <label htmlFor="monday">Monday</label>
       <input type="text" id="monday" name="monday" />
       <label htmlFor="tuesday">Tuesday</label>
       <input type="text" id="tuesday" name="tuesday" />
       <label htmlFor="wednesday">Wednesday</label>
       <input type="text" id="wednesday" name="wednesday" />
       <label htmlFor="thursday">Thursday</label>
       <input type="text" id="thursday" name="thursday" />
       <label htmlFor="friday">Friday</label>
       <input type="text" id="friday" name="friday" />
       <label htmlFor="saturday">Saturday</label>
       <input type="text" id="saturday" name="saturday" />
       <label htmlFor="address">Address</label>
       <input type="text" id="address" name="address" placeholder="address" />
       <button type="submit">submit</button>
     </form>

  );
};

export default CalenderForm;
