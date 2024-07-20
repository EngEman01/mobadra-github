function RandomQuotes(){
let quotesFetch = async () => {
    // let quotes = await fetch("https://api.quotable.io/quotes/random")
    let quotes =await fetch("https://api.quotable.io/random")
    let newQuotes = await quotes.json()
    console.log(newQuotes);
    return newQuotes
    // return quotes
}


quotesFetch().then(response => response)
            .then(data => {
  document.getElementById('quote').textContent = `"${data.content}"`;
  document.getElementById('author').textContent = `- ${data.author}`;
})

}



//////////////////////////////////////////////////////////////////////////////////////

// function RandomQuotes(){
// fetch("https://api.quotable.io/random").then(response => response.json())
//             .then(data => {
//   document.getElementById('quote').textContent = `"${data.content}"`;
//   document.getElementById('author').textContent = `- ${data.author}`;
// })

// }