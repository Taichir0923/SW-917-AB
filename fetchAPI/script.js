// fetch api

// request - Хүсэлт (get , post)
// put
// patch
// delete

/**
 * {
 *  method: "Post",
 *  body: {
 *      username: "blabla",
 *      email: "blabla"
 *  },
 *  headers: {
 *      cookie: token,
 *      
 *  }
 * }
 */

// response - Хариу

// Async JS
// Promise => 

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })


// const testPromise = function () {
//     return new Promise(function(amjilttai , amjiltgui){
//         amjilttai("Congratulations!!!");
//         amjiltgui("So sad :(")
//     })
// }


// testPromise()
//     .then(function(result){
//         console.log(result)
//     })
//     .catch(function(error){
//         console.log(error)
//     })