export default function CardDetails() {
  return (
    <div>
      <form>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-[#174568] dark:text-white"
          >
            Name on Card
          </label>
          <input
            type="email"
            id="email"
            className="block w-[400px] rounded-lg border border-gray-200 bg-white py-3 text-xs text-[#174568] focus:border-[#174568] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:w-[600px]"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-[#174568] dark:text-white"
            >
              Card number
            </label>
            <input
              type="email"
              id="email"
              className=" block w-[220px] rounded-l-lg border border-gray-200 bg-white py-3 text-xs text-[#174568] focus:border-[#174568] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:w-[424px]"
              placeholder="0000 0000 0000"
              required
            />
          </div>
          <div>
            <input
              type="number"
              id="card"
              className="mt-8 block rounded-r-lg border border-gray-200  border-l-transparent bg-white py-3 text-xs text-[#174568] focus:border-[#174568] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="MM/YY/CVC"
              required
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-[#174568] dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="block  w-[400px] rounded-lg border border-gray-200 bg-white py-3 text-xs text-[#174568] focus:border-[#174568] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:w-[600px]"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-5 flex items-start">
          <div className="flex h-5 items-center">
            <input id="remember" type="checkbox" value="" required />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 pt-1 text-xs text-[#174568]"
          >
            By confirming the order, I accept the terms of the user agreement
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[#174568] px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-[#174568] focus:outline-none focus:ring-4 focus:ring-[#174568] sm:w-auto"
        >
          Save
        </button>
      </form>
    </div>
  );
}