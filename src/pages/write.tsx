import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";

export default function WritePage() {
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const fileRef = useRef<HTMLInputElement>(null);

    const handlePick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const url = URL.createObjectURL(file);
        setThumbnail(url);
    };

    return (
        <div className="min-h-screen bg-background text-text">

            <div className="max-w-2xl mx-auto flex flex-col gap-6">

                {/* Writing Area */}
                <textarea
                    placeholder="Write quietly..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="
            w-full
            min-h-[20vh]
            resize-none
            bg-transparent
            outline-none
            border-none
            text-base
            leading-8
            whitespace-pre-wrap
            placeholder:text-muted
          "
                />


            </div>

            {/* Cover Image */}
            <button
                onClick={() => fileRef.current?.click()}
                className="
            w-full
            aspect-video
            rounded-3xl
            overflow-hidden
            bg-surface
            border border-border
            flex items-center justify-center
            hover:bg-card
            transition-all
          "
            >
                {thumbnail ? (
                    <img
                        src={thumbnail}
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2 text-muted">
                        <ImagePlus size={28} />
                        <p className="text-sm">
                            Add a cover image
                        </p>
                    </div>
                )}
            </button>

            <input
                ref={fileRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handlePick}
            />
        </div>
    );
}