import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";
import 'dotenv/config'

const { parsed: { gemini_apiKey } } = configDotenv();
const ai = new GoogleGenAI({ apiKey: gemini_apiKey });

export default async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

