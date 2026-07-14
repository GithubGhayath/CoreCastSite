import Image from "next/image";
import "../../app/globals.css";
type Props = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export default function TeamMemberCard({
  name,
  role,
  bio,
  image,
}: Props) {
  return (
    <div
      className="
      group
      relative
      h-[540px]
      w-[460px]
      overflow-hidden
      rounded-[28px]
      border
      border-line
      bg-[linear-gradient(180deg,#262433,#1d1c29)]
      p-6
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-accent
      hover:shadow-[0_25px_60px_rgba(216,99,165,.18)]
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        -right-20
        -top-20
        h-44
        w-44
        rounded-full
        bg-accent/20
        blur-3xl
        transition
        duration-500
        group-hover:scale-125
        "
      />

      {/* Decorative ring */}
      <div className="absolute right-5 top-5 h-10 w-10 rounded-full border border-accent/40" />

      {/* Logo */}
      <p className="text-xs font-semibold tracking-[0.45em] text-fg-subtle">
        CORECAST
      </p>

      {/* Avatar */}
      <div className="relative mx-auto mt-8 h-28 w-28 overflow-hidden rounded-full border-2 border-accent">
        <Image
          src={image}
          alt={name}
          fill
          className="
          object-cover
          grayscale
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:grayscale-0
          "
        />
      </div>

      {/* Name */}
      <h3 className="mt-8 text-center text-xl font-semibold text-fg">
        {name}
      </h3>

      {/* Position */}
      <p className="mt-2 text-center text-sm tracking-[0.2em] uppercase text-accent">
        {role}
      </p>

       {/* bio */}
      <p className="mt-2 text-center text-sm tracking-[0.2em] uppercase text-accent">
        {bio}
      </p>


      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center border-t border-line bg-card backdrop-blur-md">
        <span className="text-xs tracking-[0.35em] text-fg-muted">
          CREATIVE • CORECAST
        </span>
      </div>
    </div>
  );
}