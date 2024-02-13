import Container from '#/components/partials/Container';
import Image from 'next/image';

interface IProject {
  cover: {
    path: string;
    width: number;
    height: number;
  };
  title: string;
  subtitle?: string;
  description: string;
  jobdesc: string;
  techStack: string[];
}

const ListProjects: IProject[] = [
  {
    cover: {
      path: '/assets/projects/north-west.jpg',
      height: 400,
      width: 300,
    },
    title: 'Android: North West Brisk Walking Club',
    description: `North West Brisk Walking Club is a brisk walking club in singapore that under the auspices of the government. This is my freelance project and i work with my co-workers from my last company.
      The app itself is pretty simple. Their requirment is to scan their nric (or KTP in indonesia), extract the data from it, input form, scan voucher, and lastly input that data into database.
      On the backend side, we're using Dotnet to handle the processing. And we also have portal to look submited data.`,
    jobdesc:
      'Im taking a part as Android Developer here. My job desc is to develop their app from 0% until 100%',
    techStack: ['Android', 'Kotlin'],
  },
  {
    cover: {
      path: '/assets/projects/ldx.jpg',
      height: 300,
      width: 400,
    },
    title: 'L-DX',
    description: `L-DX is company based on Japan. This project (currently under developing) is really complex. Our goal is to develop ERP System from their specification.
        It is the most challenging project i ever contribute on. The challenging part such as, we need to know the flow of one pages but the page itself related to many other pages.
        So you also had to learn that related pages, and that "related" page is have another "related" page(s) well ofcourse you also need to know that page(s) to know what, how, and why of this app corelation.   
        So it is frustrating whenever you try to learn the flow of the app itself, and also you have must be precise on the data itself (ofcourse you have to). So we have documentation of the app? well yes, but it still not that easy either to learn the app just by the documentation.`,
    jobdesc:
      'My part on this job is as a Frontend Developer. Because me joined the project after the first version of the app finish.. my job basicly to update documentation of the app, re-learn of the flow app because the page oftenly changing based on request, adding more features, And finally fixing bug of the app.',
    techStack: ['React.js', 'Next.js', 'Cypress', 'AWS', 'Python'],
  },
  {
    cover: {
      path: '/assets/projects/atrbpn.png',
      height: 300,
      width: 400,
    },
    title: 'Interoperabilitas ATR/BPN',
    description: `Interoperability is a characteristic of a product or system to work with other products or systems (That wikipedia said). The goal in this app is to share data from Kementerian Pertanahan Gov. to other Goverment/Instance. 
      The basic idea of this app is the main gateway of shareable API's Kementerian Pertahanan Goverment. Because this app could handle dynamic route, wheter the route can create by user input, and the action of the route, authentication of the route, and assignable user to the route has been made.`,
    jobdesc: `I was taking part as Fullstack here. We basicly start from 0 until fully developed app. I handled dynamic route, authentication of the dynamic route, Request of the service, handling Action of the service, Integrate into Kementerian Pertanahan Keycloak (SSO), etc`,
    techStack: [
      'React.js',
      'Next.jS',
      '.Net 6',
      'PostgreSQL',
      'Windows Server',
      'MySQL',
      'Oracle',
      'MongoDB',
      'Keycloak',
    ],
  },
  {
    cover: {
      path: '/assets/projects/sibaru.png',
      height: 300,
      width: 400,
    },
    title: 'SIBARU (Sistem Informasi Bantuan Perumahan)',
    description: `SIBARU (Sistem Informasi Bantuan Perumahan) is Indonesia Goverment web-app by "Dirjen Perumahan". SIBARU application aimed at accommodating housing provision assistance proposal activities.`,
    jobdesc:
      'In this project, my part was mostly adding new features, bug fixing, integrate between other Dirjen Perumahan App, and etc. Also in this project i handled most everything by myself wheter its Frontend, Backend, or even the AWS Server',
    techStack: ['React.js', 'AWS', 'Express JS', 'MySQL'],
  },
  {
    cover: {
      path: '/assets/projects/sipencatar.png',
      height: 300,
      width: 400,
    },
    title: 'SIPENCATAR (Seleksi Penerimaan Calon Taruna/Taruni) Kementerian Perhubungan',
    description: `SIPENCATAR (Seleksi Penerimaan Calon Taruna/Taruni) Kementerian Perhubungan is Indonesia Goverment web-app by "Kementerian Perhubungan". This app is the portal registraton of new cadets Kementerian Perhubungan University.`,
    jobdesc:
      `This is my first project when i arrived in Nusantech. Our goals back there is to redevelop existing app from PHP Laravel into Express JS, also adjust flow the app based user requirements. 
      I've been handling this project twice (because every year the app oftenly changed). Also in this app we also integrate the app into SSCN (BKN). My task focused on backend devs & server only but sometimes i got few task on the frontend.`,
    techStack: ['React.js', 'Next.js', 'Express JS', 'MySQL', 'AWS'],
  },
];

export default function Page() {
  return (
    <Container className="py-8">
      <div className="my-12">
        <h4 className="font-bold my-2 text-lg text-emerald-400">
          Project Section
        </h4>
        <h1 className="font-bold mt-2 mb-12 text-2xl text-gray-800">
          Here&#39;s some works that i&#39;ve been working on.
        </h1>

        <p>Under construction. Please comeback later :D</p>
      </div>
    </Container>
  );
}
