import { socialLinks } from "../data/portfolio";

export function SocialLinks() {
  return (
    <div className="mt-8 flex justify-center gap-4 md:justify-start">
      {socialLinks.map((social) => (
        <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-1 shadow-lg">
          <img src={social.icon} alt={social.label} className="h-8 w-8 transition hover:scale-110" width="512" height="512" />
        </a>
      ))}
      <a href="tel:+201018591869" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 shadow-lg transition hover:scale-110" aria-label="Call 01018591869" title="Call 01018591869">
        <img src="/phone.png" alt="" className="h-8 w-8 rounded-full object-cover transition hover:scale-110" width="512" height="512" />
      </a>
    </div>
  );
}
