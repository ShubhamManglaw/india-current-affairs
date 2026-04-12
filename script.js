const API_KEY = "b0c8015005fd4fc583ef418624d50626";
const URL = `https://gnews.io/api/v4/search?q=india&lang=en&country=in&max=10&apikey=5959fbbb5ac516735b51276f2d301473`;
const container = document.getElementById("news-container");
const loading = document.getElementById("loading");
let allNews = [];
async function fetchNews() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    allNews = data.articles;
    displayNews(allNews);
  } catch (error) {
    container.innerHTML = "<p>Error loading news</p>";
  }
  loading.style.display = "none";
}
function displayNews(newsArray) {
  container.innerHTML = "";
  newsArray.map((news) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${news.image || ''}">
      <h3>${news.title}</h3>
      <p>${news.description || "No description"}</p>
      <a href="${news.url}" target="_blank">Read More</a>
    `;
    container.appendChild(card);
  });
}
document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = allNews.filter(news =>
    news.title && news.title.toLowerCase().includes(keyword)
  );
  displayNews(filtered);
});
function sortAZ() {
  let sorted = allNews.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  displayNews(sorted);
}
function sortLatest() {
  let sorted = allNews.sort(function(a, b) {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });
  displayNews(sorted);
}
function filterSource(source) {
  let filtered = allNews.filter(function(news) {
    return news.source.name.toLowerCase().includes(source);
  });
  displayNews(filtered);
}
fetchNews();
