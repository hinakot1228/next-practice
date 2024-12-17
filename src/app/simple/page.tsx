"use client";

import { useFormState, useFormStatus } from "react-dom";
import { postAction } from "./postAction";

function Submit() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "送信中..." : "送信"}
    </button>
  );
}

const initialState = { errors: { name: "" } };
export default function Page() {
  const [result, dispatch] = useFormState(postAction, initialState);
  return (
    <form action={dispatch}>
      {result.errors && <div>{result.errors.name}</div>}
      <input type="text" name="name" />
      <Submit />
    </form>
  );
}
