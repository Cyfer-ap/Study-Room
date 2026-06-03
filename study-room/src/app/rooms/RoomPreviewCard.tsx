import Link from "next/link";

type RoomPreviewCardProps = {
    id: string;
    title: string;
    topic: string;
    currentMembers: number;
    maxMembers: number;
    status: string;
};

export default function RoomPreviewCard({
                                            id,
                                            title,
                                            topic,
                                            currentMembers,
                                            maxMembers,
                                            status,
                                        }: RoomPreviewCardProps) {
    const isRoomFull = currentMembers >= maxMembers;
    const availableSeats = maxMembers - currentMembers;

    return (
        <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/50">
            <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold">{title}</h2>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
          {isRoomFull ? "Full" : status}
        </span>
            </div>

            <div className="space-y-3 text-sm">
                <div>
                    <p className="text-slate-500">Current topic</p>
                    <p className="font-medium text-slate-200">{topic}</p>
                </div>

                <div>
                    <p className="text-slate-500">Members</p>
                    <p className="font-medium text-slate-200">
                        {currentMembers} / {maxMembers}
                    </p>
                </div>

                <div>
                    <p className="text-slate-500">Available seats</p>
                    <p className="font-medium text-slate-200">
                        {isRoomFull ? "No seats available" : `${availableSeats} seats left`}
                    </p>
                </div>
            </div>

            {isRoomFull ? (
                <button
                    type="button"
                    disabled
                    className="mt-6 w-full rounded-full bg-slate-700 px-5 py-2 text-sm font-semibold text-slate-400 disabled:cursor-not-allowed"
                >
                    Room Full
                </button>
            ) : (
                <Link
                    href={`/rooms/${id}`}
                    className="mt-6 block w-full rounded-full bg-cyan-400 px-5 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                    Join Room
                </Link>
            )}
        </article>
    );
}