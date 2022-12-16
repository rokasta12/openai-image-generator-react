import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import { baseImage, BASE_URL } from "./constants";
function App() {
  const [count, setCount] = useState(0);
  const [imageURL, setImageURL] = useState(baseImage);
  const [prompt, setPrompt] = useState("");

  const generateImg = async () => {
    console.log("clicked");
    const response = await axios.post(BASE_URL + "/api/hello", { prompt });
    const image = response.data.image;
    setImageURL(image);
  };

  return (
    <div className="App">
      <div>
        <img src={imageURL} className="logo" alt="Vite logo" />
      </div>
      <textarea
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
      />
      <div className="card">
        <button onClick={generateImg}>Lets do it</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
