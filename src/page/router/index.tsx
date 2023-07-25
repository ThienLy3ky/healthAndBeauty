import { Routes, Route } from "react-router-dom";
import React from "react";
export interface formatOp {
  path: string;
  element: any;
  exact: Boolean;
}
export default function Router(props: any) {
  const { option } = props;

  return (
    <Routes>
      {option?.map(({ path, element, exact }: formatOp) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  );
}
