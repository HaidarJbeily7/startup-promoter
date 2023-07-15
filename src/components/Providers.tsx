"use client";
import { Provider } from "jotai";


function Providers({ children }: { children: React.ReactNode }) {
  return <Provider >{children}</Provider>;
}

export default Providers;