import OpenAI from "openai";
import { OPENAI_KEY } from "./apiConstant";
const client = new OpenAI({
  apiKey: OPENAI_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});
export default client;
