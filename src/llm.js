import { ChatOpenAI } from "@langchain/openai";
import * as dotenv from "dotenv"
dotenv.config();

const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0.5,
    maxTokens: 100,
    verbose: true,
});

const response = await model.invoke("Hello, how are you?");
console.log(response);
