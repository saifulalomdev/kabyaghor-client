type Notification = {
  id: string;
  text: string;
  time: string;
};

const notifications: Notification[] = [
  {
    id: "1",
    text: "Saiful Alom published a new story.",
    time: "2h ago",
  },
  {
    id: "2",
    text: "A saved story was updated.",
    time: "1d ago",
  },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background text-text px-5 py-8">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        <h1 className="text-2xl font-semibold">Notifications</h1>

        <div className="flex flex-col gap-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="p-4 rounded-2xl bg-surface border border-border"
            >
              <p className="text-sm">{n.text}</p>
              <p className="text-xs text-muted mt-1">{n.time}</p>
            </div>
          ))}
        </div>

        {/* Empty state idea */}
        {notifications.length === 0 && (
          <p className="text-sm text-muted">
            No new readings or updates.
          </p>
        )}

      </div>
    </div>
  );
}