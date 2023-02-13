import { useState } from "react";
import LoadingIcon from "./LoadingIcon";
import toast from 'react-hot-toast';

const Shortner = () => {
  const [typedUrl, setTypedUrl] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUrlChange = (e) => {
    setTypedUrl(e.target.value);
  };

  const getShortURL = async (e) => {
    e.preventDefault();

    setLoading(true);
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${typedUrl}`
    );
    const data = await response.json();
    if (typedUrl == null || response.ok !== true) {
      setError(true);
      setUrl(null);
      setLoading(false);
    }

    const shortenUrl = data.result;

    setUrl(shortenUrl);
    setError(false);
    setLoading(false);
  };
  const notify = () => toast.success('Successfully copied!');

  return (
    <div className=" sm:mt-12">
      <form onSubmit={getShortURL}>
        <div className="sm:flex">
          <div className="min-w-0 flex-1">
            <label htmlFor="url" className="sr-only">
              URL Input
            </label>
            <input
              onChange={handleUrlChange}
              type="text"
              name="url"
              placeholder="Paste your link here"
              className="block w-full px-4 py-3 rounded-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button className="block w-full py-3 px-4 h-12 rounded-md shadow bg-gradient-to-r from-[#6961ff] to-indigo-400 text-white font-bold hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
              Shorten it!
            </button>
          </div>
        </div>
      </form>
      <div className=" flex justify-center">{loading && <LoadingIcon />}</div>

      {url && (
        <div className="mt-5 sm:mt-5 bg-[#6C63FF] rounded-md p-5 shadow-md mobile-nav">
          <p className="text-gray-900 font-medium text-xl">
            Your shortened links :
          </p>
          <div className="flex flex-col gap-4 py-3 md:py-5">
            <div className="flex justify-between">
              <p className="text-white font-bold text-xl sm:text-4xl">
                {url.short_link}
              </p>
              <button
                className="block w-24 py-1 px-4 h-9 rounded-md shadow bg-gradient-to-r from-slate-900 to-slate-900 text-white font-bold hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                onClick={() => {
                  navigator.clipboard.writeText(url.short_link);
                  notify();
                }}
              >
                Copy it!
              </button>
            </div>
            <div className="flex justify-between">
              <p className="text-white font-bold text-xl sm:text-4xl">
                {url.short_link2}
              </p>
              <button
                className="block w-24 py-1 px-4 h-9 rounded-md shadow bg-gradient-to-r from-slate-900 to-slate-900 text-white font-bold hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                onClick={() => {
                  navigator.clipboard.writeText(url.short_link2);
                  notify();
                }}
              >
                Copy it!
              </button>
            </div>
            <div className="flex justify-between">
              <p className="text-white font-bold text-xl sm:text-4xl">
                {url.short_link3}
              </p>
              <button
                className="block w-24 py-1 px-4 h-9 rounded-md shadow bg-gradient-to-r from-slate-900 to-slate-900 text-white font-bold hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                onClick={() => {
                  navigator.clipboard.writeText(url.short_link3);
                  notify();
                }}
              >
                Copy it!
              </button>
            </div>
          </div>
        </div>
      )}
      {error && (
        <p className="mt-3 text-red-500 font-semibold text-xl mobile-nav">
          Please enter a valid URL.
        </p>
      )}
    </div>
  );
};

export default Shortner;
