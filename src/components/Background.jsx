import { motion, useScroll, useTransform } from "framer-motion";

function Background() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <>
      <div className="fixed inset-0 bg-black -z-20"></div>

      <motion.div style={{ y }} className="fixed inset-0 -z-10">

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600 opacity-30 rounded-full blur-[250px]"></div>

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-pink-500 opacity-30 rounded-full blur-[250px]"></div>

      </motion.div>
    </>
  );
}

export default Background;