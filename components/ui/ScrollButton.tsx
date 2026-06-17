"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { scrollToId } from "@/lib/utils";

export function ScrollButton({
  targetId,
  children,
  ...props
}: { targetId: string } & ButtonProps) {
  return (
    <Button onClick={() => scrollToId(targetId)} {...props}>
      {children}
    </Button>
  );
}
