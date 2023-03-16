'use client';
import Container from '#/components/partials/Container';
import feather from 'feather-icons';
import Image from 'next/image';

interface ISocialMedia {
  icon: string;
  label: string;
  anchor: string;
}

const SocialMediaList: ISocialMedia[] = [
  {
    icon: feather.icons.github.toSvg(),
    label: 'Github',
    anchor: 'https://github.com/fahmidyt',
  },
  {
    icon: feather.icons.gitlab.toSvg(),
    label: 'Gitlab',
    anchor: 'https://gitlab.com/fmidyt',
  },
  {
    icon: feather.icons.linkedin.toSvg(),
    label: 'Linkedin',
    anchor: 'https://www.linkedin.com/in/muhammad-fahmi-hidayat-532804182/',
  },
  {
    icon: feather.icons.facebook.toSvg(),
    label: 'Facebook',
    anchor: 'https://www.facebook.com/fahmi.files',
  },
  {
    icon: feather.icons.instagram.toSvg(),
    label: 'Instagram',
    anchor: 'https://www.instagram.com/f.aahmi/',
  },
  {
    icon: feather.icons.twitter.toSvg(),
    label: 'Twitter',
    anchor: 'https://twitter.com/fahmidyt_',
  },
  {
    icon: feather.icons['phone-call'].toSvg(),
    label: 'Whatsapp',
    anchor: 'https://wa.me/+6283899850340',
  },
];

export default function Page() {
  return (
    <Container className="py-8 tracking-wide leading-relaxed">
      <div className="mt-12">
        <h4 className="font-bold my-2 text-base md:text-lg text-emerald-400">
          about.
        </h4>
        <h1 className="font-bold my-2 text-2xl text-gray-800">About Me</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-4 md:gap-12">
        <div>
          <p className="font-normal mt-4 mb-4 text-justify text-gray-800">
            My name is Muhammad Fahmi Hidayat, and I work as a Software Engineer
            at Nusantech. I have a passion for learning and exploring new
            technologies, and I am constantly seeking to broaden my knowledge
            and skill set. I have experience working with various programming
            languages, such as{' '}
            <b>
              Typescript/Javascript (React.JS, Next.JS, Gatsby, Node.JS,
              Express.JS), C# (.Net), and also PHP (Laravel & Codeigniter)
            </b>
            .
          </p>

          <p className="font-normal mt-4 mb-4 text-justify text-gray-800">
            Currently, I am studying{' '}
            <b>Informatics Engineering at Mercubuana University</b>, where I am
            focused on learning about <b>data science</b> and
            <b> machine learning</b>. It has been a challenging yet rewarding
            experience to delve into this field and gain insight into how AI
            works and the benefits of having a data scientist on a team. I am
            excited to continue <b>learning</b> and <b>growing</b> in this area.
          </p>

          <p className="font-normal mt-4 text-justify text-gray-800">
            Here are some public project if you're interested in checking how
            this personal website have been built:
          </p>

          <ul className="list-disc pl-5 my-2 text-blue-400 font-normal">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fahmidyt/fahmidyt-fe"
                className="hover:underline font-bold"
              >
                Frontend GITHUB
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fahmidyt/fahmidyt-be"
                className="hover:underline font-bold"
              >
                Backend GITHUB
              </a>
            </li>
          </ul>
          <p className="font-normal mb-4 text-justify text-gray-800">
            Both projects still don't have relations between them. But you can
            see it through how I usually write some codes.
          </p>
        </div>
        <div className="order-first md:order-last">
          <Image
            className="mx-auto"
            src="/assets/me.jpg"
            alt="meeee"
            width="400"
            height="650"
          />
          <p className="font-normal italic my-2 text-gray-800 text-center text-sm">
            This is me in 2018. (in the middle)
          </p>
        </div>
      </div>

      <div className="my-12">
        <h4 className="font-bold my-2 text-base md:text-lg text-emerald-400">
          my social media.
        </h4>
        <h1 className="font-bold my-2 text-2xl text-gray-800">
          You could find me on my social media down below:
        </h1>

        <ul
          className={`font-normal mt-4 grid grid-cols-4 md:grid-cols-7 w-full md:w-1/2`}
        >
          {SocialMediaList.map((socialMedia) => (
            <li key={socialMedia.label} className="hover:text-emerald-400">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={socialMedia.anchor}
                className="flex flex-col items-center my-2"
              >
                <i dangerouslySetInnerHTML={{ __html: socialMedia.icon }} />
                <span>{socialMedia.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
