import { useEffect, useState } from "react";
import Social from "./components/social/social";
import Terminal from "./components/terminal/Terminal";
import Navbar from "./components/navbar/Navbar";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: import.meta.env.VITE_FIREBASE_URI,
};

function App() {
  const [toggleTerminal, setToggleTerminal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  
  const checkKeyValues = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "/") {
      setToggleTerminal(!toggleTerminal);
    }
  };


  useEffect(() => {
    // Simulate some initial loading logic, like fetching data
    const initialize = async () => {
      // Put any initialization logic here
      await initializeApp(firebaseConfig);

      document.addEventListener("keydown", checkKeyValues);
      // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading
      setIsLoading(false);
      return () => {
        document.removeEventListener("keydown", checkKeyValues);
      };
    };

    initialize();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loader or spinner
  }

  return (
    <>
      <Navbar />
      <Social />
      {toggleTerminal && <Terminal />}
    </>
  );
}

export default App;
