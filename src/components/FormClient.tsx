import { useState } from "react";
import Client from "../core/Client";
import ButtonApp from "./ButtonApp";
import InputData from "./InputData";

interface FormProps {
  client: Client;
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
        <ButtonApp color="blue" className="mr-10 w-40">
          {id ? "salvar" : "alterar"}
        </ButtonApp>
        <ButtonApp className="w-40">Cancelar</ButtonApp>
      </div>
    </div>
  );
}
