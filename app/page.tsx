import Container from '#/components/partials/Container';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 min-h-[90vh] items-center py-5 tracking-wide leading-relaxed">
      <div className="order-last md:order-first">
        <h4 className="font-bold my-4 text-lg text-emerald-400">
          hello and welcome! 👋
        </h4>
        <h1 className="font-bold my-4 text-2xl text-gray-800">
          I am Fahmidyt.
        </h1>

        <p className="font-normal mt-4 mb-12 text-left text-gray-800">
          As an experienced Software Engineer, I am passionate about solving
          real-world problems using my knowledge of computer technology. I am
          always eager to learn and explore new areas of computer science,
          constantly expanding my skill set through personal projects and
          independent research. In my free time, I enjoy deepening my
          understanding of programming languages, frameworks, and systems
          through a combination of self-study and hands-on experimentation.
        </p>

        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href="/about-me"
            className="bg-emerald-400 py-2 rounded-lg text-white text-center"
          >
            Learn more
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+6283899850340"
            className="bg-slate-900 py-2 rounded-lg text-white text-center"
          >
            Contact me
          </a>
        </div>
      </div>

      <div>
        <Image
          src="/assets/home.png"
          alt="Home Image"
          width="500"
          height="400"
          className="mx-auto"
        />
      </div>
    </Container>
  );
}
