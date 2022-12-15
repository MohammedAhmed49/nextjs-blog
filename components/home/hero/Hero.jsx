import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/spider-man.webp" width="300" height="300" />
      </div>
      <h1>Hi, I'm Mo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores,
        laboriosam quidem nam magni nisi illo odit fugit consequuntur maxime
        illum aut esse accusamus qui neque et totam non praesentium!
      </p>
    </section>
  );
};

export default Hero;
