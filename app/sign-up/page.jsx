'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [data, setData] = useState({ nom: '', prenom: '', email: '', password: '', password_confirmation: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nom, prenom, email, password, password_confirmation } = data;
    if(password !== password_confirmation){
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    else{
      try {
        await axios.post('/api/user', { nom, prenom, email, password });
        alert('Inscription réussie');
      } catch (error) {
        alert('Erreur d\'inscription');
      }
    }
  };
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

            <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit} >
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  Prénom
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={data.prenom}
                  onChange={(e) => setData({ ...data, prenom: e.target.value })}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                  Nom de famille
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={data.nom}
                  onChange={(e) => setData({ ...data, nom: e.target.value })}
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}

                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Mot de passe </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                  Confirmation du mot de passe
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={data.password_confirmation}
                  onChange={(e) => setData({ ...data, password_confirmation: e.target.value })}

                />
              </div>

              {/* <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    Je souhaite recevoir des e-mails sur les événements, les mises à jour de produits et les annonces de l'entreprise.
                  </span>
                </label>
              </div> */}

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  En créant un compte, vous acceptez nos{" "}
                  <a href="#" className="text-gray-700 underline">conditions générales d'utilisation</a>
                   {" "}et{" "}
                  <a href="#" className="text-gray-700 underline">politique de confidentialité</a>.
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border bg-[#3bb77e] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#00935D] hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  S'inscrire
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Vous avez déjà un compte?
                  <Link href="/login" className="text-gray-700 "> Se connecter</Link>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
   
