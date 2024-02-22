function getData(dataId,getNextData){
    setTimeout(()=>{
        if(getNextData){
            getNextData();
        }
    },2000);
}

//Callback hell
// It occurs due to nested loops formed.
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        })
    })
})