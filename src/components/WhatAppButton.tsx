import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hello Skyline Air Charter Desk, I would like to inquire about a private charter quote.");

  return (
    <a
      href={`https://wa.me/254700000000?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl shadow-emerald-900/50 hover:bg-emerald-500 hover:scale-105 transition-all flex items-center gap-2 group border border-emerald-400/30"
      title="Chat with 24/7 Charter Desk"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold uppercase tracking-wider pr-1">
        24/7 Charter Desk
      </span>
    </a>
  );
}