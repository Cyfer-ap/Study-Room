export default function FeaturesSection() {
    return (
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