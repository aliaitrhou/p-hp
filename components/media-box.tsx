import React from "react";
import Link from "next/link";

interface MediaProps {
  url: string;
  platform: string;
  classNames?: string;
  children: React.ReactNode;
}

const MediaBox: React.FC<MediaProps> = ({
  url,
  children,
  platform,
  classNames,
}) => {
  return (
    <span className={`flex gap-2 items-center rounded-md w-fit ${classNames}`}>
      <p
        className="text-base/3  p-1 text-blue-800 bg-blue-400/30
       dark:bg-teal-300/10 dark:text-teal-500 rounded-sm"
      >
        {platform}:
      </p>
      @
      <Link
        href={url}
        target="_blank"
        className="-ml-2 hover:underline decoration-2 underline-offset-2"
      >
        {children}
      </Link>
    </span>
  );
};

export default MediaBox;
