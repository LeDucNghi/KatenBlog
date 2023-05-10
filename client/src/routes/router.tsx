import { Route, Routes } from "react-router-dom";

import CustomSuspense from "../components/Common/Suspense/CustomSuspense";
import { DocTitle } from "../widgets/DocTitle/DocTitle";
import { Loading } from "../components/Common/Loading/Loading";
import { routes } from "./routes";

export interface IRouterProps {}

export function Router(props: IRouterProps) {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <CustomSuspense
              timeoutMs={route.loadingTimeout}
              fallback={<Loading />}
            >
              <DocTitle title={`${route.title}`}>{route.element}</DocTitle>
            </CustomSuspense>
          }
        />
      ))}
    </Routes>
  );
}
