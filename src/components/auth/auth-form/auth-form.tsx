"use client";

import Link from "next/link";
import { useState } from "react";
import { RegionSelector } from "../region-selector";
import { Button } from "@/components/ui/button/button";


interface AuthFormProps {
  mode: 'signin' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serverRegion, setServerRegion] = useState('oceania');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isSignIn = mode === 'signin';
  const title = isSignIn ? 'Iniciar Sesión' : 'Sign up';
  const description = isSignIn 
    ? 'Accede a tu cuenta para gestionar tus mapas de asientos'
    : 'Create your company account to get started';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log(`${mode} attempt:`, { 
        email, 
        password, 
        confirmPassword, 
        companyName,
        serverRegion,
        rememberMe 
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block mb-8">
            <div className="flex items-center space-x-2 justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SEATS.IO</span>
            </div>
          </Link>
          
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600">
            {description}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
            {!isSignIn && (
              <>
                <div className="pb-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Company Account</h3>
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <RegionSelector 
                  value={serverRegion}
                  onChange={setServerRegion}
                />

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">First Admin User</h3>
                    <Button size="md" type="button" className="ml-2 text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {isSignIn ? 'Correo electrónico' : 'Work email'}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder={isSignIn ? "tu@ejemplo.com" : "you@company.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isSignIn ? "current-password" : "new-password"}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {!isSignIn && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}

            {isSignIn ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Recordarme
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <input
                  id="accept-terms"
                  name="accept-terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="accept-terms" className="ml-2 block text-sm text-gray-700">
                  Acepto los{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-500 transition-colors">
                    términos y condiciones
                  </a>
                </label>
              </div>
            )}
          </div>

          <Button
            type="submit"
            flavor="raised"
            color="primary"
            fullWidth
            size="lg"
            loading={isLoading}
          >
            {isLoading ? 'Procesando...' : title}
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              {isSignIn ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}{' '}
              <Link 
                href={isSignIn ? '/signup' : '/signin'} 
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                {isSignIn ? 'Sign up' : 'Log in'}
              </Link>
            </p>
          </div>
        </form>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Demo no funcional
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Esta es una demostración de interfaz. El formulario no procesa datos reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}