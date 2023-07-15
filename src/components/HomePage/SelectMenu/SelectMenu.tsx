import { Container } from "@/common/Container";
import { Button } from "@/common/Button";
import Link from "next/link";

export function SelectMenu() {
  return (
    <section className="bg-gray-50 ">
      <Container>
        <div className="flex flex-col gap-3 py-3">
          <Button>
            <Link href={"/kitchen"} className="flex justify-between">
              <p>Меню кухні</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </Button>
          <Button>
            <Link href={"/bar"} className="flex justify-between">
              <p>Меню бару</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </Button>
          <Button>
            <Link href={"/bear"} className="flex justify-between">
              <p>Меню десертів</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </Button>
          <div className="flex">
            <div className="w-2/6 h-[2px] bg-gray-300 my-auto"></div>
            <p className="px-4 text-sm text-gray-500">ПОСИЛАННЯ:</p>
            <div className="w-2/6 h-[2px] bg-gray-300 my-auto"></div>
          </div>
          <Button>
            <Link href={"/response"} className="flex justify-between">
            <p>Надіслати відгук</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
