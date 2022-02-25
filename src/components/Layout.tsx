import Head from "next/head";
import Title from "./Title";

interface LayoutProps {
  children: any;
  title: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Site de cadastro de clientes" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{props.title}</title>
      </Head>

      <div
        className={`
            flex flex-col w-3/4 bg-white text-gray-800 rounded-md min-w-min
        `}
      >
        <Title>{props.title}</Title>

        <div className={`p-6`}>{props.children}</div>
      </div>
    </>
  );
}
