import { Heart, Bookmark, Send } from "lucide-react";

export default function PostActions() {
  return (
    <div className="w-full flex justify-between items-center text-[#5C554D]">

      {/* Left: Emotional actions */}
      <div className="flex gap-4">

        <button className="flex items-center gap-1 hover:text-[#7A4E2D] transition">
          <Heart size={20} />
        </button>

        <button className="flex items-center gap-1 hover:text-[#7A4E2D] transition">
          <Send size={20} />
        </button>

      </div>

      {/* Right: Save */}
      <button className="flex items-center gap-1 hover:text-[#7A4E2D] transition">
        <Bookmark size={20} />
      </button>
    </div>
  );
}