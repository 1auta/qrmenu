import { CardList } from "@/common/CardList";
import { Metadata } from "next";
import Link from "next/link";

const metadata: Metadata = {
  title: "bar",
};

export default function Bar() {
  return (
    <>
      <div className="mt-12">
        <button className="border border-gray-300 py-2 px-4 rounded-md shadow-sm bg-gray-50">
          <Link href={"/"} className="flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>На головну</p>
          </Link>
        </button>
      </div>
      <CardList />
    </>
  );
}
