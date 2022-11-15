let favNumber = 32;
let baseURL = "http://numbersapi.com";

// Step 1
$.getJSON(`${baseURL}/${favNumber}/trivia?json`).then(data => {
    console.log(data);
});

// Step 2
let threeNumbers = [3, 9, 27];
$.getJSON(`${baseURL}/${threeNumbers}/trivia?json`).then(facts => {
    for (let i in facts) {
        $("body").append(`<p>${facts[i]}</p>`);
    }
});

// Step 3
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}/trivia?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
