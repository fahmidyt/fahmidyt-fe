'use client';
import Container from '#/components/partials/Container';
import feather from 'feather-icons';
import Image, { ImageLoaderProps } from 'next/image';


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
  const startWorkingYears = new Date('2021-02-01').getFullYear();
  const workingForYears = new Date().getFullYear() - startWorkingYears;

  return (
    <Container className="py-8">
      <div className="mt-12">
        <h4 className="font-bold my-2 text-base md:text-lg text-emerald-400">
          So.. you wanna know about me huh? xixi
        </h4>
        <h1 className="font-bold my-2 text-2xl text-gray-800">
          This is About section
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-4 md:gap-12">
        <div>
          <p className="font-light mt-4 mb-4 text-justify text-gray-800">
            Muhammad Fahmi Hidayat. That is my fullname, but often called Fahmi
            (Fah-<span className="font-bold">mi</span>) I work for{' '}
            <span className="font-bold italic">Nusantech</span> for{' '}
            {workingForYears} year(s) now as a Software Engineer. For me, i love
            to learn many things. Last time i&#39;ve take a part to contribute
            developing android apps using Kotlin and it was really new thing for
            me. I&#39;ve learn why people love Kotlin rather than Java and i
            also learn why you should pick Kotlin when you developing android
            app. But besides that i&#39;ve done many things in the past 3 years.
            From first company using PHP Codeigniter and &#39;till now done many
            projects using many programming languages.
          </p>

          <p className="font-light mt-4 mb-4 text-justify text-gray-800">
            Currently i also an active college student in Mercubuana University
            and majoring in &quot;Informatics Engineering&#39;. My main goals in
            this University to learn data science & Machine Learning stuff. To
            be honest, it really challenging to me for learning that stuff
            because it was really hard to understand that. But i got insight
            from that. Like how really AI works, what benefits of having Data
            Scientist and etc (I know we could google it but.. there is
            something more). And also, having fellow like me is a nice thing to
            have in here.
          </p>

          <p className="font-light mt-4 text-justify text-gray-800">
            Anyway.. thanks for having reading my about section here. If you
            wanna know my daily basis code style is.. you could look the code of
            this website github:
          </p>

          <ul className="list-disc pl-5 text-gray-800 font-light">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fahmidyt/fahmidyt-fe"
                className="hover:underline font-bold"
              >
                Frontend
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fahmidyt/fahmidyt-be"
                className="hover:underline font-bold"
              >
                Backend
              </a>
            </li>
          </ul>
          <p className="font-light mb-4 text-justify text-gray-800">
            But the project itself still didn&#39;t have relation between them,
            but i make it anyway for the future.
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
          <p className="font-light italic my-2 text-gray-800 text-center text-sm">
            This is me in 2018. (in the middle)
          </p>
        </div>
      </div>

      <div className="my-12">
        <h4 className="font-bold my-2 text-base md:text-lg text-emerald-400">
          Social Media
        </h4>
        <h1 className="font-bold my-2 text-2xl text-gray-800">
          You could find me on my social media down here.
        </h1>

        <ul
          className={`font-light mt-4 grid grid-cols-4 md:grid-cols-7 w-full md:w-1/2`}
        >
          {SocialMediaList.map((socialMedia) => (
            <li key={socialMedia.label}>
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
