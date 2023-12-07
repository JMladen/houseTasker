import './WeeklyCalendar.scss'

function WeeklyCalender({week, residents}){


    console.log(residents)



    return(
        <>


        {
            week &&
            <section className="display">
            <h2>Monday : {week.monday}</h2>
            <p></p>
            <h2>Tuesday : {week.tuesday}</h2>
            <p></p>
            <h2>Wednesday : {week.wednesday}</h2>
            <p></p>
            <h2>Thrusday : {week.thursday}</h2>
            <p></p>
            <h2>Friday : {week.friday}</h2>
            <p></p>
            <h2>Saturday : {week.saturday}</h2>
            <p></p>
            <h2>Sunday : {week.sunday}</h2>
            <p></p>
            </section>
        }
        </>
    )
}

export default WeeklyCalender