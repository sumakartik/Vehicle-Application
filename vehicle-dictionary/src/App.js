import * as React from "react";
import TopBar from "./components/TopBar";
import Manufacturers from "./components/Manufacturers";
import SearchBar from "./components/SearchBar";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <TopBar />
      <SearchBar />
      {/* <Manufacturers /> */}
    </div>
  );
}

// function Manufacturers() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/Manufacturers">About</Link>
//       </nav>
//     </>
//   );
// }

// function Makes() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>That feels like an existential question, don't you think?</p>
//       </main>
//       <nav>
//         <Link to="/Makes">Home</Link>
//       </nav>
//     </>
//   );
// }

// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>That feels like an existential question, don't you think?</p>
//       </main>
//       <nav>
//         <Link to="/Home">Home</Link>
//       </nav>
//     </>
//   );
// }
