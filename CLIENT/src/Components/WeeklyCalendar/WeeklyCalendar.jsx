function WeeklyCalender({week}){





    return(
        <>
        {
            week &&
            <section>
            <h2>Sunday</h2>
            <p>{week.sunday}</p>
            <h2>Monday</h2>
            <p>{week.monday}</p>
            <h2>Teusday</h2>
            <p>{week.tuesday}</p>
            <h2>Wednesday</h2>
            <p>{week.wednesday}</p>
            <h2>Thrusday</h2>
            <p>{week.thursday}</p>
            <h2>Friday</h2>
            <p>{week.friday}</p>
            <h2>Saturday</h2>
            <p>{week.saturday}</p>
            </section>
        }
        </>
    )
}

export default WeeklyCalender