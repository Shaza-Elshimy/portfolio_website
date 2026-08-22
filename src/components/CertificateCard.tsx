import type { Certification } from "../types/portfolio";

export function CertificateCard({ certification }: { certification: Certification }) {
  return (
    <article className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
      <img src={certification.image} alt={certification.imageAlt} className="h-56 w-full rounded-md object-cover" width="1116" height="793" loading="lazy" decoding="async" />
    </article>
  );
}
