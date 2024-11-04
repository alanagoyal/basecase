"use client";

export default function CTA() {
  return (
    <div className="mx-auto px-4 py-5 text-center">
      <h2 className="text-xl md:text-2xl">
        Too early to talk to an investor?
        <br />
        <a
          href="https://x.com/alanaagoyal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
        >
          Talk to a developer.
        </a>
      </h2>
    </div>
  );
}
