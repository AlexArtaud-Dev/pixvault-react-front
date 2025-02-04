// main.tsx
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/AuthContext";
import './index.css';
import AppRouter from "@/router/AppRouter"; // <<--- import and use it
import React from "react";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
	    <ThemeProvider attribute="class" defaultTheme="light">
		  <AuthProvider>
			{/*<Layout>*/}
			    <AppRouter />
			{/*</Layout>*/}
		  </AuthProvider>
	    </ThemeProvider>
	</React.StrictMode>,
);
