export default function Features() {
  const features = [
    {
      icon: "🗺️",
      title: "Automated Roadmap",
      description: "Personalized, semester-by-semester roadmap based on your major, year, and goals—so you always know what to do next.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🎯",
      title: "Opportunities Feed",
      description: "Curated scholarships, internships, and conferences from organizations like TMCF, UNCF, and more—tailored for underclassmen but useful for any driven student.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "⏰",
      title: "Deadline Tracker",
      description: "Smart reminders so you never miss an application deadline again—especially during your first and second year when everything feels new.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "🤖",
      title: "AI Career Agent",
      description: "Get instant resume feedback, career advice, and opportunity suggestions 24/7—no matter your major or year.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Everything You Need to Succeed Early
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We guide underclassmen—and any student who wants a head start—through the confusing early steps of building a competitive resume.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-white text-2xl mb-5 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}