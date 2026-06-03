import Link from "next/link";
import { notFound } from "next/navigation";
import { studyRooms } from "@/data/studyRooms";

type RoomDetailPageProps = {
    params: Promise<{
        roomId: string;
    }>;
};

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
    const { roomId } = await params;

    const room = studyRooms.find((studyRoom) => studyRoom.id === roomId);

    if (!room) {
        notFound();
    }

    const availableSeats = room.maxMembers - room.currentMembers;
    const isRoomFull = room.currentMembers >= room.maxMembers;

    return (
        <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex items-center justify-between gap-6">
                    <div>
                        <p className="mb-2 text-sm font-semibold text-cyan-300">
                            Study Room
                        </p>

                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            {room.title}
                        </h1>

                        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                            Current topic:{" "}
                            <span className="font-semibold text-slate-100">
                {room.topic}
              </span>
                            . Later, this page will contain live chat, participants, focus
                            timer, study goals, peer testing, and video or audio controls.
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
                                <p className="font-medium text-slate-200">{room.id}</p>
                            </div>

                            <div>
                                <p className="text-slate-500">Topic</p>
                                <p className="font-medium text-slate-200">{room.topic}</p>
                            </div>

                            <div>
                                <p className="text-slate-500">Members</p>
                                <p className="font-medium text-slate-200">
                                    {room.currentMembers} / {room.maxMembers}
                                </p>
                            </div>

                            <div>
                                <p className="text-slate-500">Available seats</p>
                                <p className="font-medium text-slate-200">
                                    {isRoomFull ? "No seats available" : `${availableSeats} seats left`}
                                </p>
                            </div>

                            <div>
                                <p className="text-slate-500">Status</p>
                                <p className="font-medium text-cyan-300">
                                    {isRoomFull ? "Full" : room.status}
                                </p>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
}