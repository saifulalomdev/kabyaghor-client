import { useState } from "react";
import { Heart, Bookmark } from "lucide-react";

export default function ProductDetailsPage() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text">

      {/* Cover Image */}
      <div className="w-full aspect-video bg-surface overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-5 py-6 flex flex-col gap-6">

        {/* Title */}
        <h1 className="text-2xl font-semibold leading-snug">
          Quiet Letters — A Collection of Reflections
        </h1>

        {/* Author / Creator */}
        <p className="text-sm text-muted">
          Curated by Kabyaghor Editorial
        </p>

        {/* Price */}
        <div className="text-lg font-medium">
          ৳180
        </div>

        {/* Actions */}
        <div className="flex gap-4 text-muted">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1 transition ${
              liked ? "text-red-400" : "hover:text-text"
            }`}
          >
            <Heart size={18} />
            <span className="text-xs">Like</span>
          </button>

          <button
            onClick={() => setSaved(!saved)}
            className={`flex items-center gap-1 transition ${
              saved ? "text-text" : "hover:text-text"
            }`}
          >
            <Bookmark size={18} />
            <span className="text-xs">Save</span>
          </button>
        </div>

        {/* Description */}
        <div className="text-sm leading-7 text-muted whitespace-pre-wrap">
          {`A small collection of quiet writings and reflections.
Designed for slow reading and personal moments.

This edition focuses on emotional simplicity,
written for readers who prefer silence over noise.

Includes short essays, letters, and poetic fragments.`}
        </div>

        {/* CTA */}
        <button className="w-full py-3 rounded-xl bg-primary text-black font-medium">
          Collect for ৳180
        </button>

      </div>
    </div>
  );
}