import { GoogleGenerativeAI } from "@google/generative-ai";

import { createScoringPrompt } from "./prompts";

import type { AnalysisResult } from "./types";

const apiKey = process.env.GEMINI_API_KEY;

if (apiKey === undefined || apiKey === "") {
  console.warn("GEMINI_API_KEY is not set");
}

const genAI =
  apiKey !== undefined && apiKey !== "" ? new GoogleGenerativeAI(apiKey) : null;

export async function analyzePost(
  text: string,
  locale: string
): Promise<AnalysisResult> {
  if (!genAI) {
    throw new Error("Gemini API key is not configured");
  }

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.7,
    },
  });

  const prompt = createScoringPrompt(text, locale);

  const result = await model.generateContent(prompt);
  const response = result.response;
  const responseText = response.text();

  const analysis: AnalysisResult = JSON.parse(responseText);

  return analysis;
}
