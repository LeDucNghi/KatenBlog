import * as React from "react";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

export interface IAppRouteProps {}

export function AppRoute(props: IAppRouteProps) {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
