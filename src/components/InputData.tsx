interface InputProps {
  text: string;
  type?: "text" | "number";
  value: any;
  readOnly?: boolean;
  valueChange?: (value: any) => void;
}

export default function InputData(props: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-4 mt-2">{props.text}</label>
      <input
        onChange={(e) => props.valueChange?.(e.target.value)}
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readOnly}
        className={`
      border
      border-purple-500 
      focus:outline-none
      rounded-md
      px-4 py-2
      `}
      />
    </div>
  );
}
