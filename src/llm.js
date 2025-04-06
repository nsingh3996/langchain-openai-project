// import { ChatOpenAI } from "@langchain/openai";
import { Ollama } from "@langchain/ollama";
import * as dotenv from "dotenv"
dotenv.config();

// const model = new ChatOpenAI({
//     model: "gpt-4o-mini",
//     temperature: 0.5,
//     maxTokens: 100,
//     verbose: true,
// });

const model = new Ollama({
    model: "deepseek-r1:7b",
    temperature: 0.5,
    baseUrl: "http://localhost:11434",
});

const response = await model.invoke("Hello, how are you?");
console.log(response);
