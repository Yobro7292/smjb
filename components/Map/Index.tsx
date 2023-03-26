const Map = () => {
  return (
    <section className="overflow-hidden bg-gray-100 flex flex-col sm:flex-row justify-center items-center sm:pr-8">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Locate us on Google Map
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Find directions and surroundings information on Google map.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-dark-brown px-12 py-3 text-sm font-medium text-white transition hover:bg-brown focus:outline-none"
            >
              Open Google Map
            </a>
          </div>
        </div>
      </div>

      <div className="sm:w-[70%] w-full flex justify-center items-center">
        <img
          alt="Student"
          src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
          className="w-full object-cover h-full"
        />
      </div>
    </section>
  );
};

export default Map;
