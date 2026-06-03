export default function CTASection() {
    return (
        <section id="rooms" className="mx-auto max-w-4xl px-6 py-24 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Build better study habits with collaborative rooms.
            </h2>

            <p className="mb-8 text-slate-300">
                In the next steps, we will add routing, reusable components, room pages,
                authentication, and real-time communication.
            </p>

            <button className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Start Building
            </button>
        </section>
    );
}