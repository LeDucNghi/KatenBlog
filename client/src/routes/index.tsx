import { Route, Routes } from "react-router-dom";

import { AuthenticatedLayout } from "../components/layouts/AuthenticatedLayout";
import CustomSuspense from "../components/Common/Suspense/CustomSuspense";
import { LandingLayout } from "../components/layouts/LandingLayout";
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
              {route.isLandingLayout ? (
                <LandingLayout>{route.element}</LandingLayout>
              ) : (
                <AuthenticatedLayout>{route.element}</AuthenticatedLayout>
              )}
            </CustomSuspense>
          }
        />
      ))}
    </Routes>
  );
}
