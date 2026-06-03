import Link from "next/link";

type RoomDetailPageProps = {
    params: Promise<{
        roomId: string;
    }>;
};

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
    const { roomId } = await params;

    const formattedRoomName = roomId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex items-center justify-between gap-6">
                    <div>
                        <p className="mb-2 text-sm font-semibold text-cyan-300">
                            Study Room
                        </p>

                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            {formattedRoomName}
                        </h1>

                        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                            This is the first placeholder for an individual study room. Later,
                            this page will contain live chat, participants, focus timer, study
                            goals, peer testing, and video or audio controls.
                        </p>
                    </div>

                    <Link
                        href="/rooms"
                        className="shrink-0 rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                    >
                        Back to Rooms
                    </Link>
                </div>

                <section className="grid gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
                        <h2 className="mb-4 text-2xl font-bold">Live Study Area</h2>

                        <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950">
                            <p className="text-center text-slate-400">
                                Real-time study room interface will appear here.
                            </p>
                        </div>
                    </div>

                    <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                        <h2 className="mb-4 text-2xl font-bold">Room Details</h2>

                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-slate-500">Room ID</p>
                                <p className="font-medium text-slate-200">{roomId}</p>
                            </div>

                            <div>
                                <p className="text-slate-500">Status</p>
                                <p className="font-medium text-cyan-300">Active placeholder</p>
                            </div>

                            <div>
                                <p className="text-slate-500">Upcoming modules</p>
                                <p className="font-medium text-slate-200">
                                    Chat, participants, timer, and peer testing
                                </p>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
}