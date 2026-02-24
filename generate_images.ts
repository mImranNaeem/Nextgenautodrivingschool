import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function generateCarImages() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
  const model = "gemini-2.5-flash-image";

  const prompts = [
    "A professional photograph of a silver 2011 Lexus CT200h hatchback driving car. The car has 'Autogen' driving school signs and branding on the doors and a roof sign. High quality, realistic, parked on a modern suburban street.",
    "A silver 2011 Lexus hatchback with 'Autogen' driving school decals on the side. The car is shown from a 45-degree front angle. Bright daylight, professional automotive photography.",
    "A silver 2011 Lexus hatchback driving on a road, featuring 'Autogen' driving school signage. The car is a 2011 model hatchback. Sharp focus, realistic textures."
  ];

  const imageUrls: string[] = [];

  for (let i = 0; i < prompts.length; i++) {
    console.log(`Generating image ${i + 1}...`);
    const response = await ai.models.generateContent({
      model: model,
      contents: [{ parts: [{ text: prompts[i] }] }],
      config: {
        imageConfig: {
          aspectRatio: "4:3"
        }
      }
    });

    for (const part of response.candidates![0].content.parts) {
      if (part.inlineData) {
        const base64 = part.inlineData.data;
        const url = `data:image/png;base64,${base64}`;
        imageUrls.push(url);
      }
    }
  }

  fs.writeFileSync("generated_images.json", JSON.stringify(imageUrls));
  console.log("Images generated and saved to generated_images.json");
}

generateCarImages().catch(console.error);
