"use client";

import { Container } from "@/common/Container";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-gray-200">
      <Container>
        <div className="text-sm h-20 text-center">
          <div>
            <p>Ⓒ 1auta</p>
          </div>
          <div className="flex flex-col">
            <Link href={"#"}>Умови користування</Link>
            <Link href={"#"}>Політика конфіденційності</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
