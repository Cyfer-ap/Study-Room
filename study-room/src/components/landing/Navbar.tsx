import Link from "next/link";

export default function Navbar() {
    return (
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

            <Link
                href="/rooms"
                className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
                Get Started
            </Link>
        </nav>
    );
}