import "./CalenderForm.scss";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

// const baseUrl = "https://project-2-api.herokuapp.com";

const CalenderForm = ({ propslist }) => {
  return (
    <div className="main-container">
      <div className="left-container">
        {propslist.map((home, index) => (
          <div key={index} className="avatar-container">
            <img
              src="assets//Images/Mohan-muruge.jpg"
              alt={`Avatar ${index + 1}`}
              className="avatar"
            />
            <ul className="avatar-list">
              <li>Chore 1</li>
              <li>Chore 2</li>
              <li>Chore 3</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="right-container">
        <div className="right-top-title">
          <h2>Add a new home</h2>
          <h2>Search existing homes</h2>
        </div>
        <div className="right-container__top">
          <form className="form-container">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              required
            />
            <label htmlFor="residents">Residents:</label>
            <input
              type="text"
              id="residents"
              name="residents"
              placeholder="Enter the home's residents"
              required
            />
            <button type="submit">Submit</button>
          </form>

          <div className="search-bar">
            <label>Search for existing address:</label>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button type="button">Search</button>
          </div>
        </div>
        <div className="right-container__bottom">
          <h2>Select your chores:</h2>
          <form className="form-container">
            {propslist.length > 0 &&
              Object.keys(propslist[0].weeks[0]).map((day) => (
                <React.Fragment key={day}>
                  <label htmlFor={day.toLowerCase()}>{day}:</label>
                  <input
                    type="text"
                    id={day.toLowerCase()}
                    name={day.toLowerCase()}
                    placeholder={`Enter your daily chores for ${day.toLowerCase()}`}
                    required
                  />
                </React.Fragment>
              ))}
            <button type="submit">Submit</button>
          </form>

          <div className="search-bar">
            <label>Search for a specific week:</label>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button type="button" className="search-button">
              Search
            </button>
          </div>

          <table className="calendar">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {[...Array(7)].map((_, index) => (
                  <td key={index}></td>
                ))}
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalenderForm;

// function CalenderForm() {

//   async function handleSubmit(e) {
//     e.preventDefault();

//     await axios.post("http://localhost:5000", {
//       address: e.target.address.value,
//       monday: e.target.monday.value,
//       tuesday: e.target.tuesday.value,
//       wednesday: e.target.wednesday.value,
//       thursday: e.target.thursday.value,
//       friday: e.target.friday.value,
//       saturday: e.target.saturday.value,
//       sunday: e.target.sunday.value,
//       // <<<<<<< feature/addressGet
//       // // <<<<<<< feature/addressGet
//       // =======
//       // // <<<<<<< feature/addressBar
//       // >>>>>>> develop

//       // =======
//       // >>>>>>> develop
//     });
//   }

//   return (
//     <form action="submit" onSubmit={(e) => handleSubmit(e)}>
//       <label htmlFor="sunday">Sunday</label>
//       <input type="text" id="sunday" name="sunday" />
//       <label htmlFor="monday">Monday</label>
//       <input type="text" id="monday" name="monday" />
//       <label htmlFor="tuesday">Tuesday</label>
//       <input type="text" id="tuesday" name="tuesday" />
//       <label htmlFor="wednesday">Wednesday</label>
//       <input type="text" id="wednesday" name="wednesday" />
//       <label htmlFor="thursday">Thursday</label>
//       <input type="text" id="thursday" name="thursday" />
//       <label htmlFor="friday">Friday</label>
//       <input type="text" id="friday" name="friday" />
//       <label htmlFor="saturday">Saturday</label>
//       <input type="text" id="saturday" name="saturday" />
//       <label htmlFor="address">Address</label>
//       <input type="text" id="address" name="address" placeholder="address" />
//       <button type="submit">submit</button>
//     </form>
//   );
// }

// export default CalenderForm;

// const propslist = [
//   {
//     address: "home.address",
//     humans: {
//       jack: 0,
//       jill: 0,
//       jon: 0,
//     },
//     weeks: [
//       {
//         monday: "home.monday",
//         tuesday: "home.tuesday",
//         wednesday: "home.wednesday",
//         thursday: "home.thursday",
//         friday: "home.friday",
//         saturday: "home.saturday",
//         sunday: "home.sunday",
//       },
//     ],
//   },
//   {
//     address: "home.address",
//     humans: {
//       jack: 0,
//       jill: 0,
//       jon: 0,
//     },
//     weeks: [
//       {
//         monday: "home.monday",
//         tuesday: "home.tuesday",
//         wednesday: "home.wednesday",
//         thursday: "home.thursday",
//         friday: "home.friday",
//         saturday: "home.saturday",
//         sunday: "home.sunday",
//       },
//     ],
//   },
// ];

// const CalenderForm = () => {
//   return (
//     <div className="main-container">
//       <div className="left-container">
//         <div className="avatar-container">
//           <img
//             src="assets//Images/Mohan-muruge.jpg"
//             alt="Avatar 1"
//             className="avatar"
//           />
//           <ul className="avatar-list">
//             <li>Chore 1</li>
//             <li>Chore 2</li>
//             <li>Chore 3</li>
//           </ul>
//         </div>
//         <div className="avatar-container">
//           <img
//             src="assets//Images/Mohan-muruge.jpg"
//             alt="Avatar 1"
//             className="avatar"
//           />
//           <ul className="avatar-list">
//             <li>Chore 1</li>
//             <li>Chore 2</li>
//             <li>Chore 3</li>
//           </ul>
//         </div>
//       </div>
//       <div className="right-container">
//         <div className="right-top-title">
//           <h2>Add a new home</h2>
//           <h2>Search existing homes</h2>
//         </div>
//         <div className="right-container__top">
//           <form className="form-container">
//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               placeholder="Enter your address"
//               required
//             />
//             <label htmlFor="residents">Residents:</label>
//             <input
//               type="text"
//               id="residents"
//               name="residents"
//               placeholder="Enter the home's residents"
//               required
//             />
//             <button type="submit">Submit</button>
//           </form>

//           <div className="search-bar">
//             <label>Search for existing address:</label>
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search..."
//             />
//             <button type="button">Search</button>
//           </div>
//         </div>
//         <div className="right-container__bottom">
//           <h2>Select your chores:</h2>
//           <form className="form-container">
//             {[
//               "Sunday",
//               "Monday",
//               "Tuesday",
//               "Wednesday",
//               "Thursday",
//               "Friday",
//               "Saturday",
//             ].map((day) => (
//               <React.Fragment key={day}>
//                 <label htmlFor={day.toLowerCase()}>{day}:</label>
//                 <input
//                   type="text"
//                   id={day.toLowerCase()}
//                   name={day.toLowerCase()}
//                   placeholder={`Enter your daily chores for ${day.toLowerCase()}`}
//                   required
//                 />
//               </React.Fragment>
//             ))}
//             <button type="submit">Submit</button>
//           </form>

//           <div className="search-bar">
//             <label>Search for a specific week:</label>
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search..."
//             />
//             <button type="button" className="search-button">
//               Search
//             </button>
//           </div>

//           <table className="calendar">
//             <thead>
//               <tr>
//                 <th>Sun</th>
//                 <th>Mon</th>
//                 <th>Tue</th>
//                 <th>Wed</th>
//                 <th>Thu</th>
//                 <th>Fri</th>
//                 <th>Sat</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 {[...Array(7)].map((_, index) => (
//                   <td key={index}></td>
//                 ))}
//               </tr>
//               {/* Add more rows as needed */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalenderForm;
