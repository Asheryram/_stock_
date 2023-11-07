export default function Component() {
    return (
      <div className="flex justify-between items-center p-4  bg-slate-400 mx-4 rounded-lg shadow-md">
        <div>
          <h2 className="text-xl dark:text-white font-semibold">Product Name</h2>
          <p className="text-lg font-bold">$99.99</p>
        </div>
        <div className="flex gap-4">
          <button
            aria-label="Edit product"
            className="p-2 rounded-full hover:bg-gray-200  transition-colors"
          >
            <svg
              className=" w-6 h-6 text-blue-600 dark:text-gray-300"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </button>
          <button
            aria-label="Delete product"
            className="p-2 rounded-full hover:bg-red-200 dark:hover:bg-red-700 transition-colors"
          >
            <svg
              className=" w-6 h-6 text-red-600 dark:text-red-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>
    )
  }