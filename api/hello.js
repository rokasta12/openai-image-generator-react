// import fetch from "node-fetch";
import { Configuration, OpenAIApi } from "openai";

export default async function handler(request, response) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const prompt = request.body.prompt;

  const aiResponse = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
  });
  const image = aiResponse.data.data[0].url;

  return response.status(200).json({ image });
}
