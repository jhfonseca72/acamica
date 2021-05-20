const API_NEWS_URL = `https://newsapi.org/v2/everything?apiKey=b0fc156ce2d448a383c8d6ba718c6bb8&q=spacex&pageSize=10`;
/**
  * 
  * @param {*} article 
  */
const createCardNews = (article) => {
  const news = document.querySelector(".news");
  const template = document.querySelector("#templateNews");

  const itemNew = template.content.cloneNode(true);
  itemNew.querySelector("a").href = article.url;
  itemNew.querySelector("img").src = article.urlToImage;
  itemNew.querySelector("h3").textContent = article.title;
  itemNew.querySelector("p").textContent = article.content;
  news.appendChild(itemNew);
}

/**
 * 
 */
const fetchApiNews = async () => {
  const reqPromise = await fetch(API_NEWS_URL);
  const news = await reqPromise.json();
  news.articles.forEach(createCardNews);
}

/**
 * 
 */
const fetchApiNewsUsingAxios = async () => {
  const news = await axios.get(API_NEWS_URL);
  news.articles.forEach(createCardNews);
}

/**
 * Funcion de ejecucion inmediata
 */
(async function () {
  try {
    await fetchApiNews()
  } catch (e) {
    console.error(e);
  }
})();