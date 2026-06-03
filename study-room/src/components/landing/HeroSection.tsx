export default function HeroSection() {
    return (
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
                <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                    Collaborative learning for modern students
                </p>

                <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                    Study together in live rooms with chat, focus tools, and peer testing.
                </h1>

                <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
                    StudySync helps students join virtual study rooms, collaborate in real
                    time, discuss topics, test each other, and stay accountable during
                    focused learning sessions.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <button className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                        Create Study Room
                    </button>

                    <button className="rounded-full border border-slate-700 px-7 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                        Explore Features
                    </button>
                </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold">AI & ML Study Room</h2>
                        <p className="text-sm text-slate-400">Live session in progress</p>
                    </div>

                    <span className="rounded-full bg-green-400/10 px-3 py-1 text-sm text-green-300">
            Live
          </span>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-3">
                    <StatCard value="08" label="Members" />
                    <StatCard value="45m" label="Focus Time" />
                    <StatCard value="12" label="Questions" />
                </div>

                <div className="space-y-3">
                    <InfoCard
                        title="Today's Goal"
                        description="Complete neural networks revision and solve quiz problems."
                    />

                    <InfoCard
                        title="Current Activity"
                        description="Group discussion: Backpropagation and gradient descent."
                    />
                </div>
            </div>
        </section>
    );
}

type StatCardProps = {
    value: string;
    label: string;
};

function StatCard({ value, label }: StatCardProps) {
    return (
        <div className="rounded-2xl bg-slate-800 p-4 text-center">
            <p className="text-2xl font-bold text-cyan-300">{value}</p>
            <p className="text-xs text-slate-400">{label}</p>
        </div>
    );
}

type InfoCardProps = {
    title: string;
    description: string;
};

function InfoCard({ title, description }: InfoCardProps) {
    return (
        <div className="rounded-2xl bg-slate-800 p-4">
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
    );
}