import { useState } from "react";

export default function useVisible() {
  let [visible, setVisible] = useState<"table" | "formulary">("table");

  function showTable() {
    setVisible("table");
  }

  function showFormulary() {
    setVisible("formulary");
  }

  return {
    tableVisible: visible === "table",
    formularyVisible: visible === "formulary",
    showTable,
    showFormulary,
  };
}
