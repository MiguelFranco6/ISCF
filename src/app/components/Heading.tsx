'use client';
import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className="text-5xl h-14 bg-blue-200 font-serif mb-1 text-white relative">
  <span style={{ WebkitTextStroke: '01px black' }}>{text}</span>
</h1>
};

export default Heading;

