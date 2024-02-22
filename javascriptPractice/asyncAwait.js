//async always returns a promise
// await pauses the execution of its surrounding 
//async fuction untill the promise is settled

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });

    async function getWeatherData(){
        await api();
        await api();
    }
}