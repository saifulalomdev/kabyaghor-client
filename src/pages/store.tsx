import { useState } from "react";

type Item = {
  id: string;
  title: string;
  author: string;
  price: string;
  image: string;
};

const items: Item[] = [
  {
    id: "1",
    title: "Selected Poems",
    author: "Rabindranath Tagore",
    price: "৳250",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    id: "2",
    title: "Quiet Letters",
    author: "Anonymous",
    price: "৳180",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
];

export default function StorePage() {
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Store</h1>
          <p className="text-sm text-muted">
            Books, notes, and quiet collections.
          </p>
        </div>

        {/* Search */}
        {/* <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
          className="
            w-full
            bg-surface
            border border-border
            rounded-xl
            px-4 py-3
            outline-none
            text-sm
            placeholder:text-muted
          "
        /> */}

        {/* Items */}
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="
                bg-surface
                border border-border
                rounded-2xl
                overflow-hidden
                hover:bg-card
                transition
              "
            >
              <img
                src={item.image}
                className="aspect-square w-full object-cover"
              />

              <div className="p-3 flex flex-col gap-1">
                <h2 className="text-sm font-medium">{item.title}</h2>
                <p className="text-xs text-muted">{item.author}</p>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm">{item.price}</span>

                  <button className="text-xs px-3 py-1 rounded-full bg-primary text-black">
                    Collect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}