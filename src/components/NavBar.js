import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Saeel
                    </NavLink>
                    <NavLink to="/post"
                        activeClassName="text-red-100 bg-red-700"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                        activeClassName="text-red-100 bg-red-700"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300">
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                        activeClassName="text-red-100 bg-red-700"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300">
                        About Me!
                    </NavLink>
                </nav>
                <div>
                    <SocialIcon url="https://twitter.com/SaeelParulekar" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/saeel-parulekar-79857056/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.instagram.com/saeelparulekar/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}