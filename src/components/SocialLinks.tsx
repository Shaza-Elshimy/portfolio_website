import { socialLinks } from "../data/portfolio";

export function SocialLinks() {
  return (
    <div className="mt-8 flex justify-center gap-4 md:justify-start">
      {socialLinks.map((social) => (
        <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-1 shadow-lg">
          <img src={social.icon} alt={social.label} className="h-8 w-8 transition hover:scale-110" width="512" height="512" />
        </a>
      ))}
    </div>
  );
}
