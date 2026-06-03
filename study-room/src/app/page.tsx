import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";



export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />


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