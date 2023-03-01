import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 2], [1, 5]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(177, 38, 105), rgb(214, 58, 188))",
      "linear-gradient(135deg, rgb(159, 36, 216), rgb(49, 101, 199))",
      "linear-gradient(135deg, rgb(71, 189, 175), rgb(27, 186, 67))",
    ]
  );

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, scale: scale, rotateZ: rotateZ }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
