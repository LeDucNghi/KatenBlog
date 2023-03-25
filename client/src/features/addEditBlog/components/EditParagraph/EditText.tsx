import * as React from "react";

import { TextStyle } from "../../../../models";

export interface IEditParagraphTypeProps {
  text: string | null | undefined;
  textType: TextStyle;
}

export function EditParagraphType({ text, textType }: IEditParagraphTypeProps) {
var [newText, setNewText] = React.useState<Element | unknown>();

React.useEffect(() => {

handleChangeText()
}, []);

const handleChangeText = () => {
if (textType === "bold") {
  (newText = <b>{text} </b> as unknown)
  setNewText(newText)
}
}



  // if (textType === "bold") return <b>{text} </b>;
  // if (textType === "italic")
  //   return (
  //     <p>
  //       <i>{text} </i>{" "}
  //     </p>
  //   );
  // if (textType === "underline")
  //   return (
  //     <p>
  //       <ins>{text} </ins>{" "}
  //     </p>
  //   );
  // if (textType === "upper")
  //   return <p style={{ textTransform: "uppercase" }}>{text} </p>;

    return { newText };
}
