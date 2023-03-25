import * as React from "react";

import { Box } from "@mui/material";
import { TextStyle } from "../../../../models";

export interface IEditParagraphButtonProps {
  setTextStyle: (textStyle: TextStyle) => void;
}

export function EditParagraphButton({
  setTextStyle,
}: IEditParagraphButtonProps) {
  // const [textStyle, setTextStyle] = React.useState<TextStyle>(null);

  // const handleChangeTextStyle = () => {
  //   setTextStyle("bold");
  // };

  return (
    <Box>
      <input
        type="text"
        readOnly
        placeholder="Bold"
        onClick={() => setTextStyle("bold")}
      />
      <input
        type="text"
        readOnly
        placeholder="Italic"
        onClick={() => setTextStyle("italic")}
      />
      <input
        type="text"
        readOnly
        placeholder="Underline"
        onClick={() => setTextStyle("underline")}
      />
      <input
        type="text"
        readOnly
        placeholder="Upper"
        onClick={() => setTextStyle("upper")}
      />
    </Box>
  );
}
