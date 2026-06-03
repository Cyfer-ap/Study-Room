type RoomPreviewCardProps = {
    title: string;
    topic: string;
    members: string;
    status: string;
};

export default function RoomPreviewCard({
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