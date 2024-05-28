import React from "react";
import { Social } from "./Social";
interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg w-[40%] p-5 space-y-3">
      <p className="text-2xl">{headerLabel}</p>
      {children}
      {showSocial && <Social />}
    </div>
  );
};

export default CardWrapper;
