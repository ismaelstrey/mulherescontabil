import Image from "next/image";
import React from "react";
interface SocialMidiaProps {
  link: string;
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

export default function SocialMidia({
  link,
  src,
  alt,
  height = 25,
  width = 25,
}: SocialMidiaProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {" "}
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
        className="cursor-pointer scale-125 z-25"
      />
    </a>
  );
}
