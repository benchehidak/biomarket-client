'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Page() {
  const [data , setData] = useState({email: '', password: ''});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
      redirect: false,
    }).then((response) => {
      if (response.error) {
        console.log(response.error)
        alert('Erreur de connexion');
      } else {
        alert('Connexion réussie');
      }
    });
  };
  const { data: session } = useSession();
  if (session) {
    redirect('/account/1');
  }

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Motif"
            src='/assets/imgs/bglogin.svg'
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Bienvenue sur BioMarket
            </h1>
            <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}

                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Mot de passe </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={data.password}
                  onChange={(e) => setData({...data, password: e.target.value})}

                />
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border bg-[#3bb77e] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#00935D] hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Connexion
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Vous n'avez pas de compte?
                  <Link href="/sign-up" className="text-gray-700 "> S'inscrire</Link>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
