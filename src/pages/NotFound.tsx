import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-32 px-4 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-zinc-400 mb-8">Page not found</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
