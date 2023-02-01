
## Getting started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.


```bash 
  git clone https://github.com/rokasta12/openai-image-generator-react.git
  cd openai-image-generator-react
  
```
    
2. Install the dependencies.


```bash 
  yarn 
```


3. Create an OpenAI API key.

You can create an API key by signing up for an OpenAI account here. 
(https://beta.openai.com/signup)



4. Set the API key in the environment variables. ( .env )

```bash
OPENAI_KEY="your-value"
```

5. Start the development server.


```bash
yarn dev
```


The application should now be running on http://localhost:3000.


`api/hello.js`

This code exports a function that generates an image based on a text prompt sent in the request body, and returns the generated image URL in an HTTP response. The function uses the OpenAI API and the node-fetch library to make the API call and retrieve the generated image URL. The API key is stored in an environment variable and used to configure the OpenAI client.
