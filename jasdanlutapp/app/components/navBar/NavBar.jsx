"use client"
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Connect",
    url: "/connect",
  },
  {
    id: 3,
    title: "Documents",
    url: "/documents",
  },
  {
    id: 4,
    title: "Portfolio",
    url: "/portfolio",
  },
];

const NavBar = () => {
  return (
    <div >
      
      <div  >
        
      <Link href="/">Jason Daniel Lutz</Link>
      </div>
      <div>
        {links.map((link) => (
          <div >
          <Link key={link.id} href={link.url} >
            {link.title}
          </Link>
          </div>
          
        ))}
        </div>
        <button
          onClick={() => {
            console.log("logged out");
          }}
        >
          logout
        </button>
      </div>
    
  );
};

export default NavBar;
