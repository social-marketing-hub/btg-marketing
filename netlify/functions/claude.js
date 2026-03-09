export async function handler(event) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY, // set this in Netlify dashboard
      "anthropic-version": "2023-06-01"
    },
    body: event.body
  });

  const data = await response.json();

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(data)
  };
}
