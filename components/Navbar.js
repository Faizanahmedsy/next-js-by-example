// Component: A Component Is just a JavaScript Function that returns JSX

// A JavaScript Function can only return one item, that why you need to wrap everything in a div or a fragment (<></>)

// Component should always be in PascalCase

// Component can have props, props are just like arguments to a function

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-center items-center">
      I am a navbar I will be seen in all pages
    </nav>
  );
}
