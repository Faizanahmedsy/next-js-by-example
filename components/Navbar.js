"use client"; // When we want to use hooks or javascipt event (like onclick, onblue, etc) we need to add convert the component to a client side component by adding this line

import { usePathname } from "next/navigation"; // This is a hook

// HOOKS : Hooks are special functions that lets you "hook into" React features. For example, useState is a hook that lets you add React state to function components. The Start with the word "use" like usePathname

// Component: A Component Is just a JavaScript Function that returns JSX
// A JavaScript Function can only return one item, that why you need to wrap everything in a div or a fragment (<></>)

// Component should always be in PascalCase

// Component can have props, props are just like arguments to a function

export default function Navbar() {
  const pathName = usePathname(); // This is a hook that returns the current path of the page

  if (pathName.includes("/dashboard")) {
    return null; // This will not show the navbar in the dashboard page
  }

  return (
    <nav className="bg-black text-white flex justify-center items-center">
      I am a navbar I will be seen in all pages except the dashboard page
    </nav>
  );
}
