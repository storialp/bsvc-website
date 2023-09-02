export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-amber-700">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Our club</span>
          <span className="block">Join us today!</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-100">
          Launch your VC career
        </p>
        {/* <a
          href='#footer'
          className='mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-indigo-50 sm:w-auto'
        >
          Try out for free
        </a> */}
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Join the waitlist
        </button>
      </div>
    </div>
  );
}
