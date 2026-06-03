export default function HowItWorksSection() {
    return (
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