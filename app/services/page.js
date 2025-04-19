import { style } from "./style.css";
import Link from "next/link";
export default function Service() {
  return (
    <div class="font font-Poppins  bg-[#ffff]  min-h-screen">
      <div class="flex flex-col items-center relative pt-10 pb-10 ">
        <div class="relative flex flex-col items-center mt-2 md:mt-4 mb-3 md:mb-6">
          <h1 class="text-2xl md:text-3xl lg:text-5xl font-semibold text-stone-700">
            Our Services
          </h1>

          <div class="md:w-28 w-14 md:h-[4px] h-[2px] bg-[#0072bc] mt-1"></div>
        </div>
        <div class="flex flex-col gap-5 md:flex-col md:gap-5 lg:flex-row lg:gap-8 rounded-md mt-5">
          <Link href="/industries" class="text-white md:justify-items-center bg-[#065c95] hover:bg-[#0072bc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-5.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg
              class="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Industries
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2 animate-bounce"
              aria-hidden="true"
              fill="currentColor"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M2.38 7h12l-6 7-6-7z" />
              <path d="M10.37 8.11h-4v-6h4z" />
            </svg>
          </Link>
          <a class="text-white md:justify-items-center bg-[#065c95] hover:bg-[#0072bc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-5.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg
              class="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Solutions & Services
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2 animate-bounce"
              aria-hidden="true"
              fill="currentColor"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M2.38 7h12l-6 7-6-7z" />
              <path d="M10.37 8.11h-4v-6h4z" />
            </svg>
          </a>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 mt-4 md:mt-8">
          <div class="m-4 border p-4 shadow-lg rounded-md bg-[#0072bc]">
            <div class="flex flex-row gap-5 pb-10 p-2">
              <div class="justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-15 fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-[white]">
                  System Development Services/Website Implementation
                </h2>
                <p class="text-[white] mt-5 ">
                  On any Browsers and any Operating System
                </p>
              </div>
            </div>
          </div>
          <div class="m-4 border p-4 shadow-lg rounded-md bg-[#0072bc]">
            <div class="flex flex-row gap-5 pb-10 p-2">
              <div class="justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-15 fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-[white]">
                Enterprise Application Services
                </h2>
                <p class="text-[white] mt-5 ">
                Business operation, production, trading, manufacturing, banking and financial management, healthcare and so on.
                </p>
              </div>
            </div>
          </div>
          <div class="m-4 border p-4 shadow-lg rounded-md bg-[#0072bc]">
            <div class="flex flex-row gap-5 pb-10 p-2">
              <div class="justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-15 fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-[white]">
                DATA & Intelligence Services
                </h2>
                <p class="text-[white] mt-5 ">
                Intelligent Data Management Cloud, designed to help businesses innovate with their data on any platform, any cloud, multi-cloud, and multi-hybrid. This complete cloud-native and AI-powered platform is the critical missing piece for businesses to move from simply modernizing to truly transforming for a digital world.
                </p>
              </div>
            </div>
          </div>
          <div class="m-4 border p-4 shadow-lg rounded-md bg-[#0072bc]">
            <div class="flex flex-row gap-5 pb-10 p-2">
              <div class="justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-15 fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-[white]">
                All The Services We Offer
                </h2>
                <p class="text-[white] mt-5 ">
                  <ol>
                    <li>Long Term Maintenance Services on both Off-site and On-site.</li>
                    <li>User Training.</li>
                    <li>Troubleshooting and Help Desk support.</li>
                    <li>ITSM (IT Service Management).</li>
                    <li>Upgrade and System maintain, etc.</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  );
}
