
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            404
          </h1>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
            Page not found
          </p>
          <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="mt-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <FiArrowLeft className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
