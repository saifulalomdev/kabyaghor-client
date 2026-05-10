import { Bookmark } from "lucide-react";

type SavedItem = {
  id: string;
  title: string;
  author: string;
  excerpt: string;
};

const savedItems: SavedItem[] = [
  {
    id: "1",
    title: "The Boy Who Waited Beside The Last Train",
    author: "Saiful Alom",
    excerpt: "A boy sat beside the old railway line...",
  },
  {
    id: "2",
    title: "Quiet Notes From A Rainy Evening",
    author: "Anonymous",
    excerpt: "The rain arrived before evening...",
  },
];

export default function SavedPage() {
  return (
    <div className="min-h-screen bg-background text-text">

      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center gap-2">
          <Bookmark size={18} />
          <h1 className="text-2xl font-semibold">Saved</h1>
        </div>

        {/* Empty State (optional) */}
        {savedItems.length === 0 && (
          <p className="text-muted text-sm">
            Your saved stories will appear here.
          </p>
        )}

        {/* List */}
        <div className="flex flex-col gap-4">
          {savedItems.map((item) => (
            <div
              key={item.id}
              className="
                p-4
                rounded-2xl
                bg-surface
                border border-border
                hover:bg-card
                transition
              "
            >
              <h2 className="text-base font-medium">
                {item.title}
              </h2>

              <p className="text-xs text-muted mt-1">
                by {item.author}
              </p>

              <p className="text-sm text-muted mt-3 leading-6">
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}