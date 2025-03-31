import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

import * as dotenv from "dotenv"
dotenv.config();

const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0.7,
});

const prompt = ChatPromptTemplate.fromTemplate("Tell me a joke on {input}");
const chain = prompt.pipe(model);
const response = await chain.invoke({input: "dog"});
console.log(response);