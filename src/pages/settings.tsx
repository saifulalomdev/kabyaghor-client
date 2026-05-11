import { useState } from "react";
import { Pencil, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import profilePic from "../assets/images/porfile.jpg";
import { authClient } from "../lib/auth-client";
import Button from "../ui/button";

type User = {
    name: string;
    image: string;
    verified: boolean;
};

export default function SettingsPage() {
    const navigate = useNavigate();

    const [user] = useState<User>({
        name: "Saiful Alom",
        image: profilePic,
        verified: true,
    });

    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        try {
            setLoading(true);

            await authClient.signOut();

            toast.success("Signed out quietly");

            navigate("/login");
        } catch {
            toast.error("Failed to sign out");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-text">
            <div className="max-w-2xl mx-auto flex flex-col gap-8">

                {/* Profile */}
                <div className="p-4 rounded-3xl bg-surface border border-border flex items-center justify-between gap-4">

                    <div className="flex items-center gap-3">
                        <img
                            src={user.image}
                            alt={user.name}
                            className="size-14 rounded-full object-cover"
                        />

                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <h2 className="text-base font-semibold">
                                    {user.name}
                                </h2>

                                {user.verified && (
                                    <div className="size-5 rounded-full bg-primary flex items-center justify-center text-xs">
                                        ✔
                                    </div>
                                )}
                            </div>

                            <p className="text-xs text-muted">
                                Reader • Writer
                            </p>
                        </div>
                    </div>

                    {/* Edit */}
                    <button
                        className="
              h-10 px-4
              rounded-full
              border border-border
              bg-background
              text-sm
              flex items-center gap-2
              text-muted
              hover:text-text
              transition-all
            "
                    >
                        <Pencil size={16} />
                        Edit
                    </button>
                </div>

                {/* Settings */}
                <div className="flex flex-col gap-3">

                    <button
                        className="
              w-full
              p-4
              rounded-2xl
              bg-surface
              border border-border
              text-left
              transition-all
              hover:bg-card
            "
                    >
                        <p className="text-sm font-medium">
                            Appearance
                        </p>

                        <p className="text-xs text-muted mt-1">
                            Theme, typography, reading atmosphere
                        </p>
                    </button>

                    <button
                        className="
              w-full
              p-4
              rounded-2xl
              bg-surface
              border border-border
              text-left
              transition-all
              hover:bg-card
            "
                    >
                        <p className="text-sm font-medium">
                            Notifications
                        </p>

                        <p className="text-xs text-muted mt-1">
                            Reading updates, followers, recommendations
                        </p>
                    </button>

                    <button
                        className="
              w-full
              p-4
              rounded-2xl
              bg-surface
              border border-border
              text-left
              transition-all
              hover:bg-card
            "
                    >
                        <p className="text-sm font-medium">
                            Privacy
                        </p>

                        <p className="text-xs text-muted mt-1">
                            Control visibility and reading activity
                        </p>
                    </button>

                    <button
                        className="
              w-full
              p-4
              rounded-2xl
              bg-surface
              border border-border
              text-left
              transition-all
              hover:bg-card
            "
                    >
                        <p className="text-sm font-medium">
                            Account
                        </p>

                        <p className="text-xs text-muted mt-1">
                            Sessions, email address, connected devices
                        </p>
                    </button>

                </div>

                {/* Logout */}
                <Button
                    onClick={handleLogout}
                    disabled={loading}
                    variant="default"
                >

                    <LogOut size={18} />

                    {loading ? "Leaving..." : "Leave Kabyaghor"}
                </Button>

            </div>
        </div>
    );
}