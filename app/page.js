"use client";
import Image from "next/image";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content w-full flex h-48 justify-start items-end">
          <div className="mb-5 text-5xl font-bold">Utensils</div>
        </div>
      </div>

      <main className="flex bg-white text-black min-h-screen flex-col justify-between items-center p-5">
        <div className="flex flex-col w-full overflow-hidden items-start">
          <div className="flex flex-col w-full mt-2 mb-10 space-y-4">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <div className="text-4xl font-bold">Sale</div>
                <div className="flex items-center text-xs">View all</div>
              </div>
              <div className="text-xs text-gray-400">Super summer sale</div>
            </div>
            <Carousel />
          </div>
          <div className="flex flex-col mt-10 w-full space-y-4">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <div className="text-4xl font-bold">New</div>
                <div className="flex items-center text-xs">View all</div>
              </div>
              <div className="text-xs text-gray-400">Fresh in the store</div>
            </div>
            <Carousel />
          </div>
        </div>
        <div className="btm-nav">
          <button className="active bg-white text-red-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <span className="btm-nav-label text-red-400">Home</span>
          </button>
          <button className="border-blue-600 bg-white text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="rgb(156 163 175)"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="btm-nav-label text-gray-400">Bag</span>
          </button>
          <button className="bg-white text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <span className="btm-nav-label text-gray-400">Favorites</span>
          </button>
          <button className="bg-white text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span className="btm-nav-label text-gray-400">Profile</span>
          </button>
        </div>
      </main>
    </div>
  );
}
