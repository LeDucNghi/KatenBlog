import { FC, Suspense, useEffect, useState } from "react";

import { Loading } from "../Loading/Loading";

interface IProps {
  fallback: NonNullable<React.ReactNode>;
  timeoutMs: number;
  children: JSX.Element;
}

const CustomSuspense: FC<IProps> = ({ fallback, timeoutMs, children }) => {
  const [timedOut, setTimedOut] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimedOut(false);
    }, timeoutMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [timeoutMs]);

  if (timedOut) {
    return <Loading />;
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default CustomSuspense;
