import type { PropsWithChildren } from "react";
import { Navigate, Route, type RouteProps } from "react-router";

export function PrivateRoute(props: PropsWithChildren<{}>) {
  const token = localStorage.getItem("token");

  if (token) {
    return props.children;
  } else {
    return <Navigate to="/login" replace />;
  }
}
