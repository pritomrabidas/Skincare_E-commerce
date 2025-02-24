
const StatsSection = () => {
    const stats = [
      { value: "1983", title: "Funded" },
      { value: "21", title: "People" },
      { value: "3", title: "Offices" },
      { value: "211k", title: "Products Sold" },
      { value: "452k", title: "Customers Served" },
    ];
  return (
    <section className=" lg:absolute xl:-bottom-3 lg:-bottom-[25%] left-0 xl:left-8 container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white px-6 py-8 rounded shadow duration-200 hover:shadow-lg text-center relative"
          >
            <h3 className="text-3xl font-bold font-Monrope text-primary">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-base font-Popins font-normal mt-2">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection
