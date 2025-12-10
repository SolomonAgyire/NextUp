export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 sm:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Now accepting early access applications
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
          Launch Your Career<br />Before You Graduate
        </h1>
        
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          An AI-powered mobile app designed for <span className="font-semibold text-blue-600 dark:text-blue-400">underclassmen</span>—and any student—who wants to land internships, scholarships, and research opportunities early.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#waitlist" className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200">
            Join the Waitlist
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">iOS</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <svg className="w-6 h-6" viewBox="0 0 800 800" fill="#a4c639">
                <path d="M146.7 288.3c0-22.3 18-40.3 40.3-40.3s40.3 18 40.3 40.3v143.5c0 22.3-18 40.3-40.3 40.3s-40.3-18-40.3-40.3V288.3zm466.6 0c0-22.3 18-40.3 40.3-40.3s40.3 18 40.3 40.3v143.5c0 22.3-18 40.3-40.3 40.3s-40.3-18-40.3-40.3V288.3z"/>
                <path d="M254.6 711.2c0 22.3 18 40.3 40.3 40.3s40.3-18 40.3-40.3V567.7h129.6v143.5c0 22.3 18 40.3 40.3 40.3s40.3-18 40.3-40.3V567.7h-290.8v143.5z"/>
                <path d="M254.6 231.4c0-22.3 18-40.3 40.3-40.3h210.2c22.3 0 40.3 18 40.3 40.3v305h-290.8v-305zm273.4-89.7L568.7 72c4.8-8.1 2.1-18.5-6-23.3-8.1-4.8-18.5-2.1-23.3 6l-44.7 75.1c-31.9-14.2-67.4-22.1-105-22.1s-73.1 7.9-105 22.1l-44.7-75.1c-4.8-8.1-15.2-10.8-23.3-6-8.1 4.8-10.8 15.2-6 23.3l40.7 69.7C174 182.8 125 250.4 125 328.5h550c0-78.1-49-145.7-126.4-186.8zM315 254c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zm170 0c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Android</span>
            </div>
          </div>
        </div>
        
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Best for freshmen and sophomores, but open to all majors and class years
        </p>
      </div>
    </section>
  );
}