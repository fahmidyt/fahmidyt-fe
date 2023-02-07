import Container from '#/components/partials/Container';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 min-h-[90vh] items-center py-5">
      <div className="order-last md:order-first">
        <h4 className="font-bold my-4 text-lg text-emerald-400">
          Hello and Welcome! 👋
        </h4>
        <h1 className="font-bold my-4 text-2xl text-gray-800">
          I am Fahmidyt. but you can call me Fahmi
        </h1>

        <p className="font-light mt-4 mb-12 text-justify text-gray-800">
          Working as a fulltime Backend for now. Me as a people that basicly
          eager to learn anything that related on computer things and use it on
          real world problematics. Programming is more like diary, you write
          some codes and it will remember.. just the difference between diary &
          code is code could run when you try to run it 😛
        </p>

        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href="/about-me"
            className="bg-emerald-400 py-2 rounded-lg text-white text-center"
          >
            Learn more about me
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+6283899850340"
            className="bg-slate-900 py-2 rounded-lg text-white text-center"
          >
            Contact me here!
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
