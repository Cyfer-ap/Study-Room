import Link from "next/link";

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
                    <RoomPreviewCard
                        title="AI & Machine Learning"
                        topic="Neural Networks Revision"
                        members="8 / 12"
                        status="Live"
                    />

                    <RoomPreviewCard
                        title="Data Structures"
                        topic="Graph Algorithms Practice"
                        members="5 / 10"
                        status="Open"
                    />

                    <RoomPreviewCard
                        title="Web Development"
                        topic="Next.js App Router Discussion"
                        members="3 / 8"
                        status="Open"
                    />
                </section>
            </div>
        </main>
    );
}

type RoomPreviewCardProps = {
    title: string;
    topic: string;
    members: string;
    status: string;
};

function RoomPreviewCard({
                             title,
                             topic,
                             members,
                             status,
                         }: RoomPreviewCardProps) {
    return (
        <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/50">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold">{title}</h2>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
          {status}
        </span>
            </div>

            <div className="space-y-3 text-sm">
                <div>
                    <p className="text-slate-500">Current topic</p>
                    <p className="font-medium text-slate-200">{topic}</p>
                </div>

                <div>
                    <p className="text-slate-500">Members</p>
                    <p className="font-medium text-slate-200">{members}</p>
                </div>
            </div>

            <button className="mt-6 w-full rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Join Room
            </button>
        </article>
    );
}
