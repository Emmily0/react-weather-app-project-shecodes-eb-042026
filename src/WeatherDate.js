export default function WeatherDate(props) {
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[props.date.getDay()];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month = months[props.date.getMonth()];
    const dayNumber = props.date.getDate();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
   
   if (minutes < 10) {
    minutes = `0${minutes}`;
   }

   if (hours < 10) {
    hours = `0${hours}`;
   }

    return (
    <span>
        <div className="return-date"> 
            {day} {dayNumber} {month} {hours}:{minutes} 
        </div>
        <span className="local-time">(your local time)</span>
    </span>
    );
    }