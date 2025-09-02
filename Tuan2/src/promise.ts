const helloAsync: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Hello Async")
    }, 2000);
});

helloAsync.then((message: string) => {
  console.log(message)  
})

export function resolveWithTen(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 1000)
    })
}

resolveWithTen().then(num => console.log("Resolve num: ",num))

function rejectWithError(){
    return new Promise((_,reject) =>{
        setTimeout(() => reject(new Error("Something went wrong")), 1000)
    })
}

rejectWithError().then(() => {}).catch(err => console.log("Rejected with: ",err.message))

function getRamdomNumber(){
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if(num >= 0) resolve(num);
        else reject("Invalid number")
    })
}

getRamdomNumber()
.then(num => console.log("Random number: ", num))
.catch(err => console.error("Error: ", err))


function simulateTask(time : number){
    return new Promise(resolve =>{
        setTimeout(() => resolve("Task done in " + time + "ms"), time)
    })
}

simulateTask(1000).then(res => console.log("Simulate task: ", res))

Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500)
]).then(results => {
    console.log("All tasks finished: ",results)
})

Promise.race([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500)
]).then(result => {
    console.log("First task finished: ",result)
})

Promise.resolve(2)
.then(num => num * num)
.then(num => num * 2)
.then(num => num + 5)
.then(result => console.log("Final result: ", result))

function filterEvenNumbers(arr : number[]){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(arr.filter(num => num % 2 === 0))
        }, 1000)
    })
}

filterEvenNumbers([1, 2, 3, 4, 5, 6])
.then(result => console.log("Even numbers: ", result))

getRamdomNumber()
.then(num => console.log("Number: ", num))
.catch(err => console.error("Error: ",err))
.finally(() => console.log("Done"));

