"use client";
import { useState } from "react";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and school email.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1 shadow-2xl">
          <div className="rounded-[calc(1.5rem-1px)] bg-white dark:bg-gray-800 p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get Early Access
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                NextUp is especially powerful for <span className="font-semibold text-blue-600 dark:text-blue-400">freshmen and sophomores</span>, but we welcome students from any class year.
              </p>
            </div>
            
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-600 px-5 py-3.5 text-gray-900 dark:text-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    aria-label="Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    School Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@university.edu"
                    className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-600 px-5 py-3.5 text-gray-900 dark:text-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all"
                    aria-label="School email"
                  />
                </div>
                
                {error && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{error}</span>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="w-full mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Join the Waitlist →
                </button>
                
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  🔒 We respect your privacy. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">You're on the list!</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We'll reach out when NextUp is ready. Get excited! 🚀
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
