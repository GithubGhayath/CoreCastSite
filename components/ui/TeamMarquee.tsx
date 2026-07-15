"use client";

import { motion } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import { FadeUp } from "./reveal";

type Member = {
  name: string;
  role: string;
  bio:string;
  image: string;
};

type Props = {
  team: Member[];
};

export default function TeamMarquee({ team }: Props) {
  const members = [...team, ...team];

  return (
    // overflow-hidden is load-bearing: the track is ~5900px wide, and without
    // it the cards escape their column and are only masked by body's overflow-x.
    <div className="w-full overflow-hidden py-10">
      <motion.div
        className="flex w-max flex-row gap-8"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
      >
       
             {members.map((member, index) => (
                  <FadeUp  key={index}>
                    <TeamMemberCard
                     {...member}/>
                      </FadeUp>
                        ))}
        
       
      </motion.div>
    </div>
  );
}