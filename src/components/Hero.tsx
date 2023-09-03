export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <img
        src="https://www.bsvc.it/wp-content/uploads/2023/03/y7ufx8r8pm0.jpg"
        alt="Background of hero"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-2xl py-16 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Bocconi Students for Venture Capital
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Creating a VC and startup ecosystem for Bocconi
          </p>
        </div>
      </div>
    </div>
  );
}
