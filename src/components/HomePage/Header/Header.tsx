import { Container } from "@/common/Container";
import { BurgerMenu } from "@/common/Burger";

export function Header() {
  return (
    <section>
      <Container>
        <div className="flex justify-between mt-1 ">
          <span className="text-5xl">Velvet</span>
          <div>
            <BurgerMenu />
          </div>
        </div>
      </Container>
    </section>
  );
}
