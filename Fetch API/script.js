let p= fetch("https://www.weatherapi.com/weather/q/bhopal-1109028?day=1 ")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value2)=>{
    console.log(value2)
})