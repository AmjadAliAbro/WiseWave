const proxyUrl = "https://api.allorigins.win/get?url=";
const api_url = `${proxyUrl}${encodeURIComponent('https://zenquotes.io/api/random')}`;
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const quoteData = JSON.parse(data.contents);
    quoteElement.innerText = quoteData[0].q;
    authorElement.innerText = `— ${quoteData[0].a}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteElement.innerText = "Sorry, couldn't fetch a quote.";
    authorElement.innerText = "";
  }
}

function tweet() {
  const tweetText = encodeURIComponent(`${quoteElement.innerText} ${authorElement.innerText}`);
  window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, 'Tweet Window', 'width=600, height=300');
}

getQuote(api_url);
