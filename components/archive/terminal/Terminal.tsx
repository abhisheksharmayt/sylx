"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { routes } from "./routes-data";
import "./style.css";

const Terminal: React.FC = () => {
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;

    const value: string = inputRef.current.value;
    const values: string[] = value.split(" ");
    inputRef.current.value = "";

    if (values[0] !== "cd" || values.length !== 2) {
      console.log(`"${value}" command not found`);
      return;
    }

    const route = routes.find((curr) => curr === values[1]);
    if (typeof route === "undefined") {
      console.log(`"${value}" command not found`);
      return;
    }

    router.push(`/${values[1]}`);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="terminal-div">
      <div className="current-directory">
        <p className="path-name">~{pathname}:</p>
      </div>
      <div className="terminal-form-div">
        <form className="terminal-form" onSubmit={handleSubmit} action="">
          <input
            className="terminal-input"
            placeholder="cd help"
            type="text"
            ref={inputRef}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
