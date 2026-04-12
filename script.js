const URL = "https://api.npoint.io/ecfe69bdd5f0d65c6a33";
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
  newsArray.forEach((news) => {
    const card = document.createElement("div");
    card.className = "card";
    const imageSrc = news.image || news.urlToImage || "";
    const imageHtml = imageSrc
      ? `<img src="${imageSrc}" alt="${news.title || 'News image'}" onerror="this.style.display='none'" />`
      : `<div class="image-placeholder">No image available</div>`;
    card.innerHTML = `
      ${imageHtml}
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