import { Container } from "@/common/Container";
import { BurgerMenu } from "@/common/Burger";

export function Header() {
  return (
    <section>
      <Container>
        <div className="flex justify-between mt-1 absolute z-20 w-4/5 ">
          <span className="text-5xl z-20">1auta</span>
          <div className="z-20">
            <BurgerMenu />
          </div>
        </div>
      </Container>
    </section>
  );
}
