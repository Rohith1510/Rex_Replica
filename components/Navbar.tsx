'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home, Search, ShoppingBag, MessageCircle, User, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ResponsiveNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle scroll event to show/hide sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationItems = [
    { name: 'Rexby', icon: Home, href: '/' },
    { name: 'Explore', icon: Search, href: '/explore' },
    { name: 'Purchases', icon: ShoppingBag, href: '/purchases' },
    { name: 'Messages', icon: MessageCircle, href: '/messages' },
    { name: 'Log in', icon: User, href: '/login' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden md:block w-full px-6 py-2 border-b bg-white">
        <div className="max-w-8xl mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Image src="/rexby-logo.png" alt="Rexby Logo" width={50} height={50} />
            <span className="text-4xl font-semibold text-[#2583b6]">Rexby</span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <Globe className="w-5 h-5 text-gray-500" />
            <Button variant="outline" className="text-md font-medium px-4">
              Log in
            </Button>
            <button 
              onClick={toggleSidebar}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Sticky Desktop Navigation on Scroll */}
      <div 
        className={`hidden md:block fixed top-0 left-0 right-0 z-30 bg-white shadow-md transform transition-transform duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full px-6 py-3">
          <div className="max-w-8xl mx-auto flex items-center justify-between">
            {/* Left: "Unclear? Ask me a question" text */}
            <div className="flex items-center">
              <Link href="/question" className="text-gray-700 font-medium">
                Unclear? Ask me a question
              </Link>
            </div>

            
            <div className="flex items-center gap-2">
              <Link href="/preview">
                <Button variant="ghost" size="sm" className="whitespace-nowrap">
                  Preview
                </Button>
              </Link>
              <Link href="/get-access">
                <Button className="bg-[#2583b6] hover:bg-cyan-700 text-white whitespace-nowrap">
                  GET ACCESS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Plain Navbar) */}
      <header className="md:hidden w-full px-6 py-4 border-b bg-white">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Image src="/rexby-logo.png" alt="Rexby Logo" width={28} height={28} />
            <span className="text-lg font-semibold text-[#2583b6]">Rexby</span>
          </div>

          {/* Right: Globe Icon */}
          <div>
            <Globe className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Desktop Sidebar menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 md:block' : 'opacity-0 pointer-events-none'
        } hidden md:block`}
        onClick={toggleSidebar}
      />

      <div 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } hidden md:block`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-semibold text-[#2583b6]">REXBY</span>
            <button onClick={toggleSidebar} className="focus:outline-none">
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            <Link href="/about" className="text-gray-700 font-medium">
              About us
            </Link>
            <Link href="/explore" className="text-indigo-600 font-medium">
              Start exploring
            </Link>
            <Link href="/creator" className="text-gray-700 font-medium">
              Become a travel creator
            </Link>
            <div className="border-t my-4"></div>
            <Link href="/login" className="text-gray-700 font-medium">
              Log in
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40">
        <div className="flex justify-around items-center h-16">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 py-2 px-3 text-xs"
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 text-[11px]">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Add padding bottom on mobile to account for fixed bottom nav */}
      <div className="md:hidden h-16"></div>
    </>
  );
}