const axios = require("axios")

// const task = (data) => {
//     return axios.post("https://webhook.site/1672d769-11de-4304-9f1c-a6ef04f96015", data)
//         .then(({ data }) => ({ returnMessage: "Sended message"}));
// }


const task = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 5000)
    })
}


(async() => {
    console.time()
    await task({ greetings: "Hi wold!!!" }),
    await task({ greetings: "Olá mundo" }),
    // await task({ greetings:  "Hola mundo"}) 
    // await task({ greetings:  "Hola mundo"}) 
    // await task({ greetings:  "Hola mundo"}) 
    // await task({ greetings:  "Hola mundo"}) 
    // await task({ greetings:  "Hola mundo"}) 
    // await task({ greetings:  "Hola mundo"}) 
    // await task({ greetings:  "Hola mundo"}) 
    // await task({ greetings:  "Hola mundo"}) 
    console.timeEnd()
})()
// console.time()
// Promise.all([
//     task({ greetings: "Hi wold!!!" }),
//     task({ greetings: "Olá mundo" }),
//     task({ greetings:  "Hola mundo"})
// ])
// .then(console.log)
// .catch(console.log)
// .finally(() => console.timeEnd())


