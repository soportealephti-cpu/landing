
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  fullContent: string;
  keyBenefits: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
