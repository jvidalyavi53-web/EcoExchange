import { Leaf } from 'lucide-react';

export default function WasteCard({ waste }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 overflow-hidden relative">
        <img 
          src={waste.image_url || 'https://via.placeholder.com/400x200?text=Residuo+Industrial'} 
          alt={waste.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-eco-green text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <Leaf size={14} /> IA Verified
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{waste.title}</h3>
        <p className="text-gray-500 text-sm mb-3 mt-1 line-clamp-2">{waste.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-tech-blue font-semibold">{waste.quantity_kg} KG</span>
          <button className="bg-eco-light hover:bg-eco-green text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Match
          </button>
        </div>
      </div>
    </div>
  );
}