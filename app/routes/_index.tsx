import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Scribble Rocks" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const headerTextOptions = [
    { a: "invitations", b: "weddings" },
    { a: "invitations", b: "corperate events" },
    { a: "thank you notes", b: "weddings" },
    { a: "thank you notes", b: "corperate events" },
  ]

  let [ headerOptionCurrent, setHeaderOptionCurrent ]  = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setHeaderOptionCurrent(headerOptionCurrent + 1);
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [headerOptionCurrent]);

  return (
    <div>
      <section className="bg-amber-50 px-4 py-8 md:flex md:justify-center">

        <div>
          <h1 className="logo-type text-xl mb-4">scribble rocks</h1>
          <div className="md:w-[44rem] lg:w-[52rem]">
            <article className="mb-4 text-left">
              <h1 className="text-2xl lg:text-3xl mb-1">We write, print, and ship <br className="md:display-none" />personalized <span className="font-bold">{headerTextOptions[headerOptionCurrent % headerTextOptions.length].a}</span> for <span className="font-bold">{headerTextOptions[headerOptionCurrent % headerTextOptions.length].b}</span>...</h1>
              <p>Allowing you to focus more on the finer details of your event!</p>
            </article>
            
            <Link
              className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              to="/start"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4"> Starting at $0.29/note </span>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
