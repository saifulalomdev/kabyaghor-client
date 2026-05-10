import { useState } from "react";
import { Pencil } from "lucide-react";
import profilePic from '../assets/images/porfile.jpg'

type User = {
    name: string;
    image: string;
    verified: boolean;
};

export default function SettingsPage() {
    const [user] = useState<User>({
        name: "Saiful Alom",
        image: profilePic,
        verified: true,
    });

    return (
        <div className="bg-background text-text">
            <div className="max-w-2xl mx-auto flex flex-col gap-8">

                {/* Profile Section */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-surface border border-border">

                    {/* Left: Avatar + Info */}
                    <div className="flex items-center gap-3">
                        <img
                            src={user.image}
                            className="size-14 rounded-full object-cover"
                        />

                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <h2 className="text-base font-semibold">
                                    {user.name}
                                </h2>

                                {/* Blue Verification */}
                                {user.verified && (
                                    <span className="text-blue-500 text-xs font-bold">
                                        ✔
                                    </span>
                                )}
                            </div>

                            <p className="text-xs text-muted">
                                Reader • Writer
                            </p>
                        </div>
                    </div>

                    {/* Edit Button */}
                    <button className="flex items-center gap-1 text-sm text-muted hover:text-text transition">
                        <Pencil size={16} />
                        Edit
                    </button>
                </div>

                {/* Settings Sections */}
                <div className="flex flex-col gap-3">

                    <div className="p-4 rounded-2xl bg-surface border border-border">
                        <p className="text-sm font-medium">Appearance</p>
                        <p className="text-xs text-muted mt-1">
                            Theme, reading mode, typography
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-surface border border-border">
                        <p className="text-sm font-medium">Privacy</p>
                        <p className="text-xs text-muted mt-1">
                            Control your reading activity visibility
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-surface border border-border">
                        <p className="text-sm font-medium">Account</p>
                        <p className="text-xs text-muted mt-1">
                            Email, password, login sessions
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}