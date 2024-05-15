const createPromise = () => {
    return new Promise((resolve, reject)=> {
    const data: string = null;
    if (data) {
        resolve(data);
    }
    else {
        reject("failed to load data")
    }
    
    })
}
// calling create promise function
const showData = async () => {
    const data = await createPromise();
    console.log(data);
}
showData();