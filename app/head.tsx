import { DefaultHead } from "#/components/layouts/DefaultHead";

export default function Head() {
    return (
      <>
        <DefaultHead />
        <title>Fahmidyt.</title>
        <meta
          name="description"
          content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
        />
      </>
    );
  }