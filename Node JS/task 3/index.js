const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("c")
    },3000)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("d")
    },0)
})

async function task(){
    console.log("a");
    console.log("b");
    const res1 = await promise1
    console.log(res1);
    const res2 = await promise2
    console.log(res2);
    console.log("e");

}
task();