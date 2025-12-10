import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/nextup_logo.png" alt="NextUp logo" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NextUp</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#waitlist" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Waitlist</a>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 NextUp. All rights reserved.</p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Built with ❤️ for students, by students.</p>
        </div>
      </div>
    </footer>
  );
}