export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Built for Students, By Students
          </h2>
        </div>
        
        <div className="relative rounded-3xl bg-white dark:bg-gray-800 p-8 sm:p-12 shadow-2xl border border-gray-100 dark:border-gray-700">
          {/* Decorative gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 dark:opacity-20"></div>
          
          <div className="relative space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 dark:first-letter:text-blue-400 first-letter:mr-1 first-letter:float-left">
              College is overwhelming. Finding internships shouldn't be. We built NextUp to level the playing field and give <span className="font-semibold text-blue-600 dark:text-blue-400">underclassmen</span>—and any student ready to start early—the tools they need to land their dream opportunities.
            </p>
            
            <p className="pt-4">
              No more guessing. No more missed deadlines. Just a clear, guided path from your first year to your first offer.
            </p>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-t border-gray-200 dark:border-gray-600">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10K+</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">Opportunities Curated</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">500+</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">Early Access Signups</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">24/7</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">AI Career Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
