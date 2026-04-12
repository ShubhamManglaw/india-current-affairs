const API_URL = "https://gnews.io/api/v4/search?q=india&lang=en&country=in&max=10";

exports.handler = async function () {
  const apiKey = process.env.GNEWS_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing GNEWS_API_KEY environment variable." }),
      headers: { "Content-Type": "application/json" },
    };
  }

  try {
    const apiRes = await fetch(`${API_URL}&apikey=${apiKey}`);
    const data = await apiRes.json();

    return {
      statusCode: apiRes.ok ? 200 : apiRes.status,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to fetch news." }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};
