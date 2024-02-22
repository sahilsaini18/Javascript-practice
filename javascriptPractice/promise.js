//To save from callback hell promise works as a solution
//for callback hell problem
function getData(dataId){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log("data",dataId);
        resolve("success");
      },2000);
  });
}

//promise chain
let p1 = getData(1);
p1.then((res) =>{
    console.log(res);
    getData(2);
    p1.then(()=>{
        console.log(res);
    })
});