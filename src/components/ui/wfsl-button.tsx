"use client";

import { Button } from "./button";

export function WfslButton(props: any) {
  return (
    <Button
      {...props}
      className={
        "rounded-[var(--wfsl-radius)] bg-[var(--wfsl-primary)] hover:bg-[var(--wfsl-primary-hover)] text-white shadow-lg transition-all " +
        (props.className ?? "")
      }
    >
      {props.children}
    </Button>
  );
}
