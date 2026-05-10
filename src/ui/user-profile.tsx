import { useState } from "react";

type UserProfileProps = {
  name: string;
  note: string;
  image: string;
};

export default function UserProfile({ name, note, image }: UserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="w-full flex items-center justify-between gap-3">

      {/* Writer Identity */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="size-10 rounded-full object-cover"
        />

        <div>
          <h2 className="text-sm font-semibold text-[#2A2622]">
            {name}
          </h2>

          <p className="text-xs text-[#5C554D] italic leading-relaxed">
            {note}
          </p>
        </div>
      </div>

      {/* Literary Action */}
      <button
        onClick={() => setIsFollowing(p => !p)}
        className={`
    px-4 py-1.5 rounded-full
    text-sm font-medium
    border border-border
    transition-all duration-300 ease-out
    bg-surface text-text
    hover:bg-card
    active:scale-[0.98]
    cursor-pointer
    ${isFollowing ? "scale-[0.97] opacity-80" : "scale-100"}
  `}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>

    </div>
  );
}