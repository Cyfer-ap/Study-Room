import CTASection from "@/components/landing/CTASection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import Navbar from "@/components/landing/Navbar";
import RoomPreviewCard from "@/components/rooms/RoomPreviewCard";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <CTASection />
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