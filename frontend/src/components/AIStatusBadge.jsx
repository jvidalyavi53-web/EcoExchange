import { Cpu, Zap, HardDrive } from 'lucide-react';

export default function AIStatusBadge({ engine = 'gemini' }) {
  const configs = {
    gemini: { icon: Cpu, color: 'bg-blue-100 text-blue-700 border-blue-200', text: 'Gemini 1.5' },
    groq: { icon: Zap, color: 'bg-yellow-100 text-yellow-700 border-yellow-200', text: 'Groq LPU' },
    ollama: { icon: HardDrive, color: 'bg-gray-100 text-gray-700 border-gray-300', text: 'Ollama Local' }
  };

  const current = configs[engine] || configs.gemini;
  const Icon = current.icon;

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${current.color}`}>
      <Icon size={14} />
      <span>{current.text} Active</span>
    </div>
  );
}