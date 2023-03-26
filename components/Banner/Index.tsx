const Banner = () => {
  return (
    <section className="relative bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-start items-center">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome !
            <strong className="block font-extrabold text-brown">
              Shree Mahuva Jain Bhojanshala
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-brown px-12 py-3 text-sm font-medium text-white shadow hover:bg-dark-brown focus:outline-none focus:ring active:bg-brown sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-brown shadow hover:text-dark-brown focus:outline-none focus:ring active:text-brown sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
