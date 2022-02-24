import Title from "./Title";

interface LayoutProps {
  children: any;
  title: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex flex-col w-3/4 bg-white text-gray-800 rounded-md min-w-min
        `}
    >
      <Title>{props.title}</Title>

      <div className={`p-6`}>{props.children}</div>
    </div>
  );
}
