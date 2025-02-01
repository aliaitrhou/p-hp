import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center">
      <p className="text-zinc-700/40 dark:text-zinc-600 font-sm">
        © {new Date().getFullYear()} Ali Ait Rahou. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
