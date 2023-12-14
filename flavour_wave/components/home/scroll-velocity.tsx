"use client";

import "@/style/scroll-velocity-style.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";

const ProductsArray1 = [
  {
    name: "blueberry",
    image: "/blueberry1.jpg",
  },
  {
    name: "burmeseBliss",
    image: "/burmeseBliss.jpg",
  },
  {
    name: "citrus",
    image: "/citrus1.jpg",
  },
  {
    name: "emerald",
    image: "/emerald.png",
  },
  {
    name: "exotic",
    image: "/exotic.jpg",
  },
  {
    name: "gingerzing",
    image: "/gingerzing.jpg",
  },
  {
    name: "jasmine",
    image: "/jasmine.jpg",
  },
  {
    name: "lushlemon",
    image: "/lushlemon.jpg",
  },
  {
    name: "lychee",
    image: "/lychee.jpg",
  },
  {
    name: "mangotango",
    image: "/mangotango.jpg",
  },
];

const ProductsArray2 = [
  {
    name: "orchid",
    image: "/orchid.jpg",
  },
  {
    name: "papaya",
    image: "/papaya.jpg",
  },
  {
    name: "passionfruit",
    image: "/cipassionfruit.jpg",
  },
  {
    name: "pineapple",
    image: "/pineapple.jpg",
  },
  {
    name: "rangoon",
    image: "/rangoon.jpg",
  },
  {
    name: "rubyred",
    image: "/rubyred.jpg",
  },
  {
    name: "starFruit",
    image: "/starFruit.jpg",
  },
  {
    name: "sunshine",
    image: "/sunshine.jpg",
  },
  {
    name: "sunshine",
    image: "/sunshine.jpg",
  },
  {
    name: "mangotango",
    image: "/mangotango.jpg",
  },
];

interface ParallaxProps {
  baseVelocity: number;
  products: Array<{
    name: string;
    image: string;
  }>;
}

function ParallaxText({ products, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {products.map((product, index) => (
          <span key={index}>
            <div className="flex items-center capitalize">
              <h3>{product.name.toLowerCase()}</h3>
              <Image
                src={product.image}
                alt={product.name}
                width={58}
                height={58}
                className="w-[58px] h-[58px] rounded-full ml-2"
              />
            </div>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollVelocity() {
  return (
    <section>
      <ParallaxText
        baseVelocity={-0.5}
        products={ProductsArray2}
      ></ParallaxText>
      <ParallaxText baseVelocity={0.5} products={ProductsArray1}></ParallaxText>
    </section>
  );
}
