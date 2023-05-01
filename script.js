const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuotebtn = document.getElementById('new-quote')



let apiQuotes = [];
// show new quotes
function newQuote(){
   // pick random quote from apiQuotes 
   const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
   // check if Author field is blank and replace it with "Unknown"
   if (!quote.author){
    authorText.textContent = "unKnown";
   }else{
    authorText.textContent = quote.author;
   }

   // check Quote length to determine styling
   if(quote.text.length>120){
    quoteText.classList.add('long-quote');
   }else{
    quoteText.classList.remove('long-quote');
   }
   quoteText.textContent = quote.text;
}
// Get quotes from API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        // console.log(apiQuotes);
        newQuote();
    } catch (error) {
        // catch error here
    }
}
// tweet quote
function tweetQuote(){
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

//Event Listeners
newQuotebtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// Onload 
getQuotes();
