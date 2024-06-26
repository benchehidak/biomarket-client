/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/9qL2DlHGq9Z
 */
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { useState, useEffect } from "react";

export function MobileNav({ totalCartItems }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  // console.log(totalCartItems)

  return (
    // (<div
    //   className="flex items-center justify-between px-4 py-3 bg-white shadow-lg">
    //   <div className="flex items-center">
    //     <IconStore className="h-6 w-6 mr-3" />
    //     <h1 className="text-lg font-semibold">Grocery Store</h1>
    //   </div>
    //   <form className="flex items-center mr-4">
    //     <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
    //     <Input className="pl-8 w-64" placeholder="Search products..." type="search" />
    //   </form>
    //   <div className="flex items-center">
    //     <Button className="mr-4" size="icon" variant="ghost">
    //       <IconShoppingCart className="h-6 w-6" />
    //       <span
    //         className="relative top-[-1.25rem] left-[-1rem] inline-flex items-center justify-center h-5 w-5 bg-red-500 rounded-full text-white text-xs font-bold">
    //         2
    //       </span>
    //       <span className="sr-only">Open shopping cart</span>
    //     </Button>
    //     <Sheet>
    //       <SheetTrigger asChild>
    //         <Button size="icon" variant="ghost">
    //           <IconMenu className="h-6 w-6" />
    //           <span className="sr-only">Toggle navigation menu</span>
    //         </Button>
    //       </SheetTrigger>
    //       <SheetContent side="right">
    //         <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
    //           <Link className="text-gray-700 hover:text-gray-900" href="#">
    //             Home
    //           </Link>
    //           <Link className="text-gray-700 hover:text-gray-900" href="#">
    //             Products
    //           </Link>
    //           <Link className="text-gray-700 hover:text-gray-900" href="#">
    //             About Us
    //           </Link>
    //           <Link className="text-gray-700 hover:text-gray-900" href="#">
    //             Contact Us
    //           </Link>
    //         </nav>
    //       </SheetContent>
    //     </Sheet>
    //   </div>
    // </div>)
    <div className="lg:sticky lg:top-0 lg:z-[10] flex flex-col sm:flex-row items-center justify-between px-4 py-3 bg-white shadow-lg ">
      <div className="flex justify-between items-center w-full ">
        <div className="flex items-center my-2">
          {/* <IconStore className="h-6 w-6 mr-3" /> */}
          <img
            className="h-10 w-10 mr-3"
            src="/assets/LOGO.svg"
            alt="Grocery Store"
          />
          
          <h1 className="text-2xl font-semibold">BIOMARKET</h1>
        </div>
        {
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <IconMenu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
                <Link className="text-gray-700 hover:text-gray-900" href="#">
                  Home
                </Link>
                <Link className="text-gray-700 hover:text-gray-900" href="#">
                  Products
                </Link>
                <Link className="text-gray-700 hover:text-gray-900" href="#">
                  About Us
                </Link>
                <Link className="text-gray-700 hover:text-gray-900" href="#">
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        }
      </div>
      <div className="flex justify-between w-full p-2 ">
        <form className="">
          {/* <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" /> */}
          <Input
            className="pl-8 w-full sm:w-64"
            placeholder="Search products..."
            type="search"
          />
        </form>
        <Link className="mr-4" size="icon" href="/shop-cart" variant="ghost">
          <IconShoppingCart className="h-6 w-6" />
          <span className="relative top-[-2rem] left-[1rem] inline-flex items-center justify-center h-5 w-5 bg-red-500 rounded-full text-white text-xs font-bold">
            {totalCartItems}
          </span>
          <span className="sr-only">Open shopping cart</span>
        </Link>
        {/* {width >= 768 ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <IconMenu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
                <Link className="text-gray-700 hover:text-gray-900" href="/">
                  Home
                </Link>
                <Link className="text-gray-700 hover:text-gray-900" href="#">
                  Products
                </Link>
                <Link className="text-gray-700 hover:text-gray-900" href="#">
                  About Us
                </Link>
                <Link className="text-gray-700 hover:text-gray-900" href="#">
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <></>
        )} */}
      </div>
      {/* <form className="flex items-center mt-4 sm:mt-0 sm:mr-4">
        <Input
          className="pl-8 w-full sm:w-64"
          placeholder="Search products..."
          type="search"
        />
      </form> */}
      {/* <div className="flex items-center mt-4 sm:mt-0">
        <Button className="mr-4" size="icon" variant="ghost">
          <IconShoppingCart className="h-6 w-6" />
          <span className="relative top-[-1.25rem] left-[-1rem] inline-flex items-center justify-center h-5 w-5 bg-red-500 rounded-full text-white text-xs font-bold">
            2
          </span>
          <span className="sr-only">Open shopping cart</span>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <IconMenu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
              <Link className="text-gray-700 hover:text-gray-900" href="#">
                Home
              </Link>
              <Link className="text-gray-700 hover:text-gray-900" href="#">
                Products
              </Link>
              <Link className="text-gray-700 hover:text-gray-900" href="#">
                About Us
              </Link>
              <Link className="text-gray-700 hover:text-gray-900" href="#">
                Contact Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div> */}
    </div>
  );
}

function IconStore(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}

function IconMenu(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function IconShoppingCart(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function IconSearch(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
