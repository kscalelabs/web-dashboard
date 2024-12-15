import { SocialMediaItemProps } from "@/components/util/interfaces";
import { motion } from "motion/react";

const SocialMediaItem = (props: SocialMediaItemProps) => {
  return (
    <a
      className={"m-0 p-0 size-6 flex"}
      href={props.linkURL}
      target={"_blank"}
      aria-label={`Go to ${props.name}`} rel="noreferrer"
    >
      <motion.div
        // variants={{
        //   initial: {
        //     opacity: 1,
        //   },
        //   hover: {
        //     opacity: 0.5,
        //   },
        // }}
        initial="initial"
        whileHover="hover"
        transition={{
          duration: 0.2,
          ease: "circOut",
        }}
      >
        {props.iconSvg}
      </motion.div>
    </a>
  );
};

export default SocialMediaItem;
