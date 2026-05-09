import PostActions from "./post-actions";
import UserProfile from "./user-profile";

const image =
    "https://luxuryborka.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-19-at-1.47.47-AM-300x300.jpeg";

export default function PostCard() {
    return (
        <div className="w-full border-b p-4 space-y-4 border-[#DDD2C3]">

            <UserProfile
                name="Saiful Alom"
                note="Writing quietly today"
                image={image}
            />

            <div className="whitespace-pre-wrap">
                post content
            </div>
            <img
                src={image}
                alt="post"
                className="aspect-video w-full object-cover rounded-md"
            />
            <PostActions />

        </div>
    );
}