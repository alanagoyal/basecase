"use client";

export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-center">
      <h2 className="text-2xl mb-8">
        Too early to talk to a VC?
        <br />
        <span className="text-emerald-500">Talk to a developer.</span>
      </h2>
      <button className="px-8 py-4 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition-colors">
        Say Hi
      </button>
    </div>
  );
}
