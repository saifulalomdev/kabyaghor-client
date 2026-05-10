import PostActions from "./post-actions";
import UserProfile from "./user-profile";
import profilePic from '../assets/images/porfile.jpg'
import postImage from '../assets/images/post-image.jpg'

const image = ""

export default function PostCard() {
    return (
        <div className="w-full border-b p-4 space-y-4 border-[#DDD2C3]">

            <UserProfile
                name="Saiful Alom"
                note="Writing quietly today"
                image={profilePic}
            />

            <div className="whitespace-pre-wrap">
                {`The rain arrived before evening.

A boy sat beside the old railway line,
holding a notebook swollen with unfinished poems.

The tea seller across the road
never asked why he came every Thursday.

Only poured tea.
Only waited.

A train passed slowly.

Windows full of strangers.
Faces lit by blue phone light.

The boy looked down at his page again.

One line.
Then another.

Somewhere between the steam,
the rusted tracks,
and the sound of distant thunder,

he finally wrote something
he did not want to delete.`}
            </div>
            <img
                src={postImage}
                alt="post"
                className="aspect-video w-full object-cover rounded-md"
            />
            <PostActions />

        </div>
    );
}