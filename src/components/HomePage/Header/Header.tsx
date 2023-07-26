import { Container } from "@/common/Container";
import { BurgerMenu } from "@/common/Burger";
import Link from "next/link";

export function Header() {
  return (
    <section>
      <Container>
        <div className="flex justify-between absolute z-20 w-4/5">
          <Link href={"/"}>
            <span className="text-5xl z-20">
              1auta
            </span>
          </Link>
          <div className="z-20">
            <BurgerMenu />
          </div>
        </div>
      </Container>
    </section>
  );
}
