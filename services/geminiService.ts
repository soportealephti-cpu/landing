
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getExpertInsight(serviceTitle: string, userQuery: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Actúa como un experto consultor senior en protección radiológica de la empresa Aleph SAC. 
        El usuario está interesado en el servicio: "${serviceTitle}".
        Su consulta es: "${userQuery}".
        
        Responde de manera profesional, técnica pero accesible, resaltando la importancia de la seguridad y el cumplimiento normativo. 
        Menciona por qué Aleph SAC es la mejor opción para esto. Mantén la respuesta concisa (máximo 150 palabras).`,
        config: {
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
        },
      });

      return response.text || "Lo siento, no pude procesar tu consulta en este momento. Por favor, intenta de nuevo.";
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "Hubo un error al conectar con nuestro asesor inteligente. Por favor, contacta directamente con nuestras oficinas.";
    }
  }
}

export const geminiService = new GeminiService();
