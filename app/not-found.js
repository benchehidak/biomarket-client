import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center py-20">
      <img src="/assets/404.svg" alt="" width="512" />
      <div className="max-w-[546px] mx-auto w-full mt-12">
        <h4 className="text-slate-900 mb-4">Page Introuvable !</h4>
        <div className="text-base font-normal mb-10">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
      </div>
      <div className="max-w-[300px] mx-auto w-full">
        <Link
          href="/"
          className="btn hover:bg-opacity-75 transition-all duration-150 block text-center"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
