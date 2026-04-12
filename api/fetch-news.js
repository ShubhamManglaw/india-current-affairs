const API_URL = "https://gnews.io/api/v4/search?q=india&lang=en&country=in&max=10";

export default async function handler(req, res) {
  const apiKeyOrUrl = process.env.GNEWS_API_KEY;

  if (!apiKeyOrUrl) {
    return res.status(500).json({ error: "Missing GNEWS_API_KEY environment variable." });
  }

  const fetchUrl = apiKeyOrUrl.startsWith("http")
    ? apiKeyOrUrl
    : `${API_URL}&apikey=${apiKeyOrUrl}`;

  try {
    const apiRes = await fetch(fetchUrl);
    const data = await apiRes.json();

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
    res.status(apiRes.ok ? 200 : apiRes.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch news." });
  }
}
