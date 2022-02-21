interface ButtonProps {
  children: string;
  color?: "blue" | "gray" | "red";
  className?: string
}

export default function ButtonApp(props: ButtonProps) {
  let color = props.color ?? "gray";
  return (
    <button
      className={`
    p-4 
    text-white 
    rounded-md mb-4
    bg-gradient-to-r from-${color}-500 to-${color}-700
    ${props.className}
    `}
    >
      {props.children}
    </button>
  );
}
