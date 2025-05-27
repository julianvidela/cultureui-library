"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "../common/icons/Close";
import clsx from "clsx";

interface ModalProps {
  title?: string;
  imageSrc?: string;
  description?: string;
  backgroundColor?: string;
  titleSize?: string;
  descriptionSize?: string;
  buttonText?: string;
  textColor?: string;
  fontWeight?: "300" | "400" | "500" | "600" | "700";
  border?: string;
  successMessageBg?: string;
  successMessageText?: string;
  inputPlaceholder?: string;
  onSubmit?: (email: string) => void;
  trigger?: React.ReactNode;
  customSubmitButton?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title = "Start building with Culture UI",
  imageSrc,
  description = "A short description or information goes here.",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  titleSize = "24px",
  descriptionSize = "16px",
  fontWeight = "700",
  buttonText = "Submit",
  border,
  successMessageBg = "#000000",
  successMessageText = "#ffffff",
  inputPlaceholder = "Your email",
  onSubmit,
  trigger,
  customSubmitButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    onSubmit?.(email);
    setSubmitted(true);
  };

  return (
    <>
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white border-none px-4 py-2 rounded-md w-80 cursor-pointer hover:bg-indigo-500"
        >
          Open Modal
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full p-4 flex items-center justify-center bg-black/50 backdrop-blur-md z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={clsx(
                "flex flex-col relative text-center rounded-lg shadow-md w-full max-w-md p-4 gap-3",
              )}
              style={{
                backgroundColor,
                color: textColor,
                border,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
             
              <div
                className="absolute top-2 right-2 w-[50px] h-[50px] flex items-center justify-center rounded-full z-50"
                style={{ backgroundColor }}
              >
                <button
                  className="w-[35px] h-[35px] rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon stroke="#595D62" />
                </button>
              </div>

              
              {imageSrc && (
                <motion.img
                  src={imageSrc}
                  alt="Modal Image"
                  className="w-full rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                />
              )}

              
              <motion.div
                className="my-5 flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h2 style={{ fontSize: titleSize, fontWeight }}>{title}</h2>
                <p style={{ fontSize: descriptionSize, fontWeight }}>{description}</p>
              </motion.div>

             
              <form onSubmit={handleSubmit} className="w-full">
                <input
                  type="email"
                  placeholder={inputPlaceholder}
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <div className="mt-4 w-full">
                  {submitted ? (
                    <motion.div
                      className="text-center p-3 rounded-md font-bold text-sm"
                      style={{
                        backgroundColor: successMessageBg,
                        color: successMessageText,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Gracias por suscribirte a nuestro newsletter
                    </motion.div>
                  ) : customSubmitButton ? (
                    customSubmitButton
                  ) : (
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white w-full py-2 px-4 mt-2 rounded-md hover:bg-indigo-500 transition-colors"
                    >
                      {buttonText}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
