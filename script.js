fetch('quotes.json')
    .then(response => response.json())
    .then(quotes => {
        const today = new Date();
        const index = today.getDate() % quotes.length;
        const quote = quotes[index];
        document.getElementById("quote").innerHTML = `"${quote.text}"<br> - ${quote.author}`;
    })
    .catch(error => console.error('Error loading quotes:', error));
