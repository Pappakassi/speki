    fetch('quotes.json')
    .then(response => response.json())
    .then(quotes => {
        const today = new Date();
        const index = today.getDate() % quotes.length;
        const quote = quotes[index];
        document.getElementById("quote").innerText = `"${quote}"`;

        // Update Telegram share link
        const telegramShareLink = `https://t.me/share/url?text=${encodeURIComponent(quote)}`;
        document.getElementById("telegram-share").href = telegramShareLink;
    })
    .catch(error => console.error('Error loading quotes:', error));
