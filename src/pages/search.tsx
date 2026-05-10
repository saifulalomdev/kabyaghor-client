import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Button from "../ui/button";
import { useNavigate } from "react-router";
import Input from "../ui/input";

type Story = {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  type: "popular" | "latest";
};

const stories: Story[] = [
  {
    id: "1",
    title: "The Boy Beside The Railway",
    author: "Saiful Alom",
    excerpt: "A boy waited in silence...",
    type: "popular",
  },
  {
    id: "2",
    title: "Rain Notes",
    author: "Anonymous",
    excerpt: "The rain arrived before evening...",
    type: "latest",
  },
];

type Filter = "all" | "popular" | "latest";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const navigate = useNavigate();


  const filtered = stories.filter((s) => {
    const matchesQuery = s.title.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "all" ? true : s.type === filter;

    return matchesQuery && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background text-text px-5 py-8">

      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        <div className="flex gap-3">
          <Button
            onClick={() => navigate(-1)}
            className="bg-surface"
          >
            <ChevronLeft />
          </Button>
          {/* Search */}
         <Input type="search" placeholder="Search..."/>

        </div>
        {/* Filters */}
        <div className="flex gap-2 text-xs">
          {(["all", "popular", "latest", "shop"] as Filter[]).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-3 py-1 rounded-full border transition ${filter === item
                ? "bg-primary text-black border-primary"
                : "bg-surface text-muted border-border"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="flex flex-col gap-4">
          {filtered.map((story) => (
            <div
              key={story.id}
              className="p-4 rounded-2xl bg-surface border border-border hover:bg-card transition"
            >
              <h2 className="text-base font-medium">{story.title}</h2>
              <p className="text-xs text-muted mt-1">by {story.author}</p>
              <p className="text-sm text-muted mt-3 leading-6">
                {story.excerpt}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}