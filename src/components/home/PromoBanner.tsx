const PromoBanner = () => {
  return (
    <section className="mt-16 rounded-3xl bg-[#f7efe6] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">

        <div className="p-10">
          <h3 className="text-3xl font-semibold mb-3">
            Wall Panels
          </h3>
          <p className="text-gray-600 mb-6">
            Level up your walls
          </p>

          <button className="px-6 py-3 bg-[#4b2e2e] text-white rounded-full text-sm hover:opacity-90">
            Know more
          </button>
        </div>

        <img
          src="https://picsum.photos/700/400?10"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default PromoBanner;
