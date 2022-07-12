import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/main";
import Main from "./hooks/main";


createRoot(document.getElementById("app")).render(<Main/>);