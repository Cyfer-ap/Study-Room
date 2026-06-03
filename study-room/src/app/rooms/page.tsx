import Link from "next/link";
import RoomPreviewCard from "@/components/rooms/RoomPreviewCard";

const studyRooms = [
    {
        id: "ai-ml",
        title: "AI & Machine Learning",
        topic: "Neural Networks Revision",
        members: "8 / 12",
        status: "Live",
    },
    {
        id: "data-structures",
        title: "Data Structures",
        topic: "Graph Algorithms Practice",
        members: "5 / 10",
        status: "Open",
    },
    {
        id: "web-development",
        title: "Web Development",
        topic: "Next.js App Router Discussion",
        members: "3 / 8",
        status: "Open",
    },
];

export default function RoomsPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <p className="mb-2 text-sm font-semibold text-cyan-300">
                            Study Rooms
                        </p>

                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Explore active study rooms
                        </h1>

                        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                            This page will later show live rooms, available seats, study
                            topics, room hosts, and real-time activity status.
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                    >
                        Back Home
                    </Link>
                </div>

                <section className="grid gap-6 md:grid-cols-3">
                    {studyRooms.map((room) => (
                        <RoomPreviewCard
                            key={room.id}
                            title={room.title}
                            topic={room.topic}
                            members={room.members}
                            status={room.status}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
}
