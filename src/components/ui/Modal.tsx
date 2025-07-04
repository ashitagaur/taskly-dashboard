import React from "react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black border border-gray-700 rounded p-6 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-white">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
