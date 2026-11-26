
const apiURL = "https://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2";
async function getPrayerTimes() 
{
    const response = await fetch(apiURL);
    const result = await response.json();
    const days = result.data;
    days.forEach(day => 
    {
        const date = day.date.gregorian.date;
        const weekday = day.date.gregorian.weekday.en;
        const timings = day.timings;
        const fajr = timings.Fajr.split(" ")[0];
        const sunrise = timings.Sunrise.split(" ")[0];
        const dhuhr = timings.Dhuhr.split(" ")[0];
        const asr = timings.Asr.split(" ")[0];
        const maghrib = timings.Maghrib.split(" ")[0];
        const isha = timings.Isha.split(" ")[0];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>date: ${date}</td>
            <td>  weekday: ${weekday}</td>
            <td>  fajr: ${fajr}</td>
            <td>  sunrise: ${sunrise}</td>
            <td>  dhuhr: ${dhuhr}</td>
            <td>  asr: ${asr}</td>
            <td>  maghrib: ${maghrib}</td>
            <td>  isha: ${isha}</td>
        `;
        const table = document.getElementById("result2");
        table.appendChild(row);
    });

    loading.classList.add("hidden");
}

async function getdate(chday) 
{
    chday = chday.split("-").reverse().join("-");
    const response = await fetch(apiURL);
    const result = await response.json();
    const days = result.data;
    days.forEach(day => 
    {
        const date = day.date.gregorian.date;
        if (date == chday)
        {
            const weekday = day.date.gregorian.weekday.en;
            const timings = day.timings;
            const fajr = timings.Fajr.split(" ")[0];
            const sunrise = timings.Sunrise.split(" ")[0];
            const dhuhr = timings.Dhuhr.split(" ")[0];
            const asr = timings.Asr.split(" ")[0];
            const maghrib = timings.Maghrib.split(" ")[0];
            const isha = timings.Isha.split(" ")[0];
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>date: ${date}</td>
                <td>  weekday: ${weekday}</td>
                <td>  fajr: ${fajr}</td>
                <td>  sunrise: ${sunrise}</td>
                <td>  dhuhr: ${dhuhr}</td>
                <td>  asr: ${asr}</td>
                <td>  maghrib: ${maghrib}</td>
                <td>  isha: ${isha}</td>
            `;
            const table = document.getElementById("result1");
            table.appendChild(row);
        }
            
    });

    loading.classList.add("hidden");
}
let btn = document.getElementById("btn");
btn.addEventListener("click",getPrayerTimes);
const chsnday = document.getElementById("day");
chsnday.addEventListener("change", function() {
    getdate(chsnday.value);
});