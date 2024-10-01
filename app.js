const apiKey = '3884c3b008224c5bb1e4b893ad86663c'; // Replace with your NewsAPI key
const newsContainer = document.getElementById('news-container');

async function fetchNews() {
    const response = await fetch('news.json');
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    newsContainer.innerHTML = ''; // Clear previous content
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-article');

        newsItem.innerHTML = `
            <img src="${article.urlToImage || 'default-image.jpg'}" alt="news image">
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Fetch news on page load
window.onload = fetchNews;
