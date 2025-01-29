import React from "react";

export function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <footer className="border-t flex items-center justify-center my-3">
      <p>All Rights Reserved {currentYear}</p>
    </footer>
  );
}
