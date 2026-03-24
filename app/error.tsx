"use client";
import { Button } from "@/components/Atoms/button";

// for runtime errors
export default function Error({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong...</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
