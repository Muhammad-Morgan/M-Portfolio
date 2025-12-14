"use client";
import { useState } from "react";
export const useHashUpdate = (newHash: string) => {
  const [hash, setHash] = useState(newHash || "overview");
  return {
    hash,
    setHash,
  };
};
