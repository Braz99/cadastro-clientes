import { useState } from "react";
import Client from "../core/Client";
import ButtonApp from "./ButtonApp";
import InputData from "./InputData";

interface FormProps {
  client: Client;
  clientChange: (client: Client) => void;
  cancel?: () => void;
}

export default function FormClient(props: FormProps) {
  let id = props.client?.id;

  let [name, setName] = useState(props.client?.name ?? "");
  let [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id ? <InputData readOnly text="Código" value={id} /> : false}
      <InputData valueChange={setName} text="Nome" value={name} />
      <InputData valueChange={setAge} text="Idade" value={age} type="number" />
      <div className="flex justify-center m-4 ">
        <ButtonApp
          onClick={() => props.clientChange?.(new Client(name, age, id))}
          color="blue"
          className="mr-10 w-40"
        >
          {id ? "alterar" : "salvar"}
        </ButtonApp>
        <ButtonApp className="w-40" onClick={props.cancel}>
          Cancelar
        </ButtonApp>
      </div>
    </div>
  );
}
