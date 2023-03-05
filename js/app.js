const API_KEY= `7c4eac396c457e5fff077dd715e97e58`
 const loadTemperature = async(city)  =>{
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        displayData(data)
    }
    catch (error){
        console.log(error)
    }
}

const displayData = data =>{
    console.log(data.weather)
    const temp= document.getElementById('temp');
    temp.innerText=data.main.temp;
    const cityName = document.getElementById('cityName');
    cityName.innerText = data.name
    document.getElementById('cloud').innerText = data.weather[0].main
}
const inputSearch = () =>{
    document.getElementById('search-btn').addEventListener('click',function(e){
        
            const inputValue = document.getElementById('input-value').value;
            console.log(inputValue)
            loadTemperature(inputValue);
    })
   
    
} 
inputSearch()
loadTemperature('dhaka')
