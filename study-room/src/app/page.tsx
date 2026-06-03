export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            {/* Navbar */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <div className="text-2xl font-bold tracking-tight">
                    Study<span className="text-cyan-400">Sync</span>
                </div>

                <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
                    <a href="#features" className="hover:text-white">
                        Features
                    </a>
                    <a href="#how-it-works" className="hover:text-white">
                        How it works
                    </a>
                    <a href="#rooms" className="hover:text-white">
                        Study Rooms
                    </a>
                </div>

                <button className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                    Get Started
                </button>
            </nav>

            {/* Hero Section */}
            <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
                <div>
                    <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        Collaborative learning for modern students
                    </p>

                    <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                        Study together in live rooms with chat, focus tools, and peer
                        testing.
                    </h1>

                    <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
                        StudySync helps students join virtual study rooms, collaborate in
                        real time, discuss topics, test each other, and stay accountable
                        during focused learning sessions.
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

                {/* Hero Card */}
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
                        <div className="rounded-2xl bg-slate-800 p-4 text-center">
                            <p className="text-2xl font-bold text-cyan-300">08</p>
                            <p className="text-xs text-slate-400">Members</p>
                        </div>

                        <div className="rounded-2xl bg-slate-800 p-4 text-center">
                            <p className="text-2xl font-bold text-cyan-300">45m</p>
                            <p className="text-xs text-slate-400">Focus Time</p>
                        </div>

                        <div className="rounded-2xl bg-slate-800 p-4 text-center">
                            <p className="text-2xl font-bold text-cyan-300">12</p>
                            <p className="text-xs text-slate-400">Questions</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="rounded-2xl bg-slate-800 p-4">
                            <p className="text-sm font-semibold">Today&apos;s Goal</p>
                            <p className="text-sm text-slate-400">
                                Complete neural networks revision and solve quiz problems.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-800 p-4">
                            <p className="text-sm font-semibold">Current Activity</p>
                            <p className="text-sm text-slate-400">
                                Group discussion: Backpropagation and gradient descent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-12 max-w-2xl">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Core features we will build
                    </h2>
                    <p className="text-slate-300">
                        The project will gradually evolve from a static landing page into a
                        full-stack real-time collaborative learning platform.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <FeatureCard
                        title="Live Study Rooms"
                        description="Create 1-to-1 or group rooms where students can join focused study sessions."
                    />

                    <FeatureCard
                        title="Real-Time Chat"
                        description="Discuss topics, share doubts, and communicate during active study sessions."
                    />

                    <FeatureCard
                        title="Peer Testing"
                        description="Students can quiz each other using questions, flashcards, and topic-based challenges."
                    />

                    <FeatureCard
                        title="Focus Timer"
                        description="Pomodoro-style study cycles to improve discipline and reduce distraction."
                    />

                    <FeatureCard
                        title="Room Roles"
                        description="Support room hosts, participants, and moderation controls for group sessions."
                    />

                    <FeatureCard
                        title="Progress Tracking"
                        description="Track completed sessions, study time, and learning consistency over time."
                    />
                </div>
            </section>

            {/* How It Works */}
            <section
                id="how-it-works"
                className="border-y border-slate-800 bg-slate-900/60"
            >
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <h2 className="mb-10 text-3xl font-bold md:text-4xl">
                        How it works
                    </h2>

                    <div className="grid gap-6 md:grid-cols-3">
                        <StepCard
                            step="01"
                            title="Create a room"
                            description="A student creates a topic-based study room and defines the study objective."
                        />

                        <StepCard
                            step="02"
                            title="Invite or join"
                            description="Other students join the room for live discussion, chat, and collaborative learning."
                        />

                        <StepCard
                            step="03"
                            title="Study and test"
                            description="Participants revise concepts, ask questions, and test each other in real time."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="rooms" className="mx-auto max-w-4xl px-6 py-24 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                    Build better study habits with collaborative rooms.
                </h2>

                <p className="mb-8 text-slate-300">
                    In the next steps, we will add routing, reusable components, room
                    pages, authentication, and real-time communication.
                </p>

                <button className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                    Start Building
                </button>
            </section>
        </main>
    );
}

type FeatureCardProps = {
    title: string;
    description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/50">
            <h3 className="mb-3 text-xl font-bold">{title}</h3>
            <p className="leading-7 text-slate-400">{description}</p>
        </div>
    );
}

type StepCardProps = {
    step: string;
    title: string;
    description: string;
};

function StepCard({ step, title, description }: StepCardProps) {
    return (
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
            <p className="mb-4 text-sm font-bold text-cyan-300">{step}</p>
            <h3 className="mb-3 text-xl font-bold">{title}</h3>
            <p className="leading-7 text-slate-400">{description}</p>
        </div>
    );
}