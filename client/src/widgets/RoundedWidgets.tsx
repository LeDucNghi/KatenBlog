import * as React from "react";

export interface IRoundedWidgetProps {
  children: string | JSX.Element;
}

export function RoundedWidget({ children }: IRoundedWidgetProps) {
  return (
    <div
      style={{
        position: "relative",

        width: "90%",

        border: "0.1em solid #ebebeb",
        borderRadius: "0.5em",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
