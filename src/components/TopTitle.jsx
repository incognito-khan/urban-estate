"use client";

import { useEffect } from "react";

export default function TopTitle({ title }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return null;
}
