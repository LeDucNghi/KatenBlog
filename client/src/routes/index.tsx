import { Route, Routes } from "react-router-dom";

import { AuthenticatedLayout } from "../components/Layouts/AuthenticatedLayout";
import CustomSuspense from "../components/Common/Suspense/CustomSuspense";
import { DocTitle } from "../widgets/DocTitle/DocTitle";
import { LandingLayout } from "../components/Layouts/LandingLayout";
import { Loading } from "../components/Common/Loading/Loading";
import { routes } from "./routes";

// export interface IRouterProps {}

export function Router() {
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
              <DocTitle title={`${route.title}`}>
                {route.isLandingLayout ? (
                  <LandingLayout>{route.element}</LandingLayout>
                ) : (
                  <AuthenticatedLayout>{route.element}</AuthenticatedLayout>
                )}
              </DocTitle>
            </CustomSuspense>
          }
        />
      ))}
    </Routes>
  );
}
