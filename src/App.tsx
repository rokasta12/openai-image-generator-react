import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import { baseImage, BASE_URL } from "./constants";
import loadingGIF from "./assets/giphy.webp";

function App() {
  const [count, setCount] = useState(0);
  const [imageURL, setImageURL] = useState(baseImage);
  const [isLoading, setisLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const generateImg = async () => {
    if (!prompt) return alert("Please enter a prompt");
    setisLoading(true);
    setImageURL(loadingGIF);
    const response = await axios.post(BASE_URL + "/api/hello", { prompt });
    const image = response.data.image;

    setTimeout(() => {
      setImageURL(image);
      setisLoading(false);
    }, 250);
  };

  return (
    <div className="App">
      <div>
        <img src={imageURL} className=" h-96 w-96 " alt="ai-image" />
      </div>
      <textarea
        className="border-2 border-red-200 dark:border-0 w-full px-2 py-4 mt-6  rounded-md focus:outline-red-300"
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
      />

      <div className="card">
        <button disabled={isLoading} onClick={generateImg}>
          {isLoading ? "building your image ✨" : "Lets do it"}
        </button>
      </div>
    </div>
  );
}

export default App;
