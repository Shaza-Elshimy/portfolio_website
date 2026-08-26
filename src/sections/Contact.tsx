import { SectionHeading } from "../components/SectionHeading";
import { Container } from "../components/Container";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
      <div className="mx-auto mb-12 max-w-3xl text-center" data-aos="fade-up"><SectionHeading>Contact Me</SectionHeading><p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p><p className="text-base leading-relaxed text-gray-400 sm:text-lg">Feel free to reach out!</p></div>
      <div className="mx-auto max-w-3xl" data-aos="fade-up"><form action="https://formsubmit.co/shazahamdy011@gmail.com" method="POST" className="soft-elevation space-y-6 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-8"><input type="hidden" name="_subject" value="New portfolio contact message" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_replyto" value="true" /><div><label htmlFor="name" className="mb-2 block text-white">Your Name</label><input type="text" id="name" name="name" required className="w-full rounded-lg border border-white/20 bg-transparent p-3 text-white placeholder-gray-400 transition focus:border-purple-500 focus:outline-none" placeholder="Enter your name" /></div><div><label htmlFor="email" className="mb-2 block text-white">Your Email</label><input type="email" id="email" name="email" required className="w-full rounded-lg border border-white/20 bg-transparent p-3 text-white placeholder-gray-400 transition focus:border-purple-500 focus:outline-none" placeholder="Enter your email" /></div><div><label htmlFor="message" className="mb-2 block text-white">Your Message</label><textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-white/20 bg-transparent p-3 text-white placeholder-gray-400 transition focus:border-purple-500 focus:outline-none" placeholder="Type your message here..." /></div><button type="submit" className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 sm:w-auto">Send Message</button></form></div>
      </Container>
    </section>
  );
}
