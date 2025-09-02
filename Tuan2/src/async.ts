export function resolveWithTen(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 1000)
    })
}

async function getTenAsync(){
    const result = await resolveWithTen();
    console.log("Async result: ", result)
}

getTenAsync()

function simulateTask(time : number){
    return new Promise(resolve =>{
        setTimeout(() => resolve("Task done in " + time + "ms"), time)
    })
}

async function runSimulateTask() {
    const result = await simulateTask(2000)
    console.log("Task done")
}

runSimulateTask()

function rejectWithError(){
    return new Promise((_,reject) =>{
        setTimeout(() => reject(new Error("Something went wrong")), 1000)
    })
}

async function tryCatchExample() {
    try{
        const result = await rejectWithError()
        console.log("Should not log: ", result)
    }catch (err) {
        if (err instanceof Error) {
            console.log("Caught error:", err.message);
        } else {
            console.log("Unknown error:", err);
        }
    }
}

tryCatchExample()