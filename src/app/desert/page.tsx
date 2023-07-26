import { Container } from "@/common/Container";
import { ButtonBack } from "@/common/ButtonBack";
import Link from "next/link";

export default function Desert() {
  return (
    <>
        <ButtonBack>
          <Link href="/">
            <div className="flex justify-between">
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
            </div>
          </Link>
        </ButtonBack>
      <Container>
        <div>
          <p>desert</p>
        </div>
      </Container>
    </>
  );
}
