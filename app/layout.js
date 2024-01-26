// This is the main starting point for your app. It is used to wrap all your pages and components. It is also used to inject global styles and scripts.

import { Footer, Navbar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); // This is the font we are using for this app

// This is the metadata for your app. It is used to populate the <head> section of your pages and components.
export const metadata = {
  title: "Next Js By Example", // The title of your app
  description: "Made with hate by @faizanahmed", // The description of your app
};

// children is a special prop it means that whatever is passed between the opening and closing tag of a component will be passed to the component as a prop called children

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* This is the how you call a component */}
        {children} {/* All the pages will be rendered in here */}
        <Footer /> {/* This is the how you call a component */}
      </body>
    </html>
  );
}

// IMPORTANT NOTE:
