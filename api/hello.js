// import fetch from "node-fetch";

export default function handler(request, response) {
  /*   const res = await fetch("...", {
    method: "POST",
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json(); */
  const API_KEY = process.env.OPENAI_KEY;
  console.log(API_KEY, "API_KEY");
  return response.status(200).json({ hi: "hello" });
}
