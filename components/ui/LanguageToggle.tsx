"use client";

// import { Languages } from "lucide-react";
// import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "@/i18n/navigation";
// import { Magnetic } from "./magnetic";

const languages = ["en", "ar", "tr"] as const;

export function LanguageToggle() {
  // const locale = useLocale();
  // const router = useRouter();
  // const pathname = usePathname();

  // const currentIndex = languages.indexOf(
  //   locale as (typeof languages)[number]
  // );

  // const nextLanguage =
  //   languages[(currentIndex + 1) % languages.length];

  // const changeLanguage = () => {
  //   router.replace(pathname, {
  //     locale: nextLanguage,
  //   });
  // };

  return (
    // <Magnetic strength={0.4}>
    //   <button
    //     onClick={changeLanguage}
    //     aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
    //     className="flex h-10 min-w-10 items-center justify-center rounded-full border border-line px-3 text-sm font-medium uppercase transition-colors duration-500 hover:border-line-strong"
    //   >
    //     {locale.toUpperCase()}
    //   </button>
    // </Magnetic>



    <button
        onClick={() => {alert("Available soon")}}
      
        className="flex h-10 min-w-10 items-center justify-center rounded-full border border-line px-3 text-sm font-medium uppercase transition-colors duration-500 hover:border-line-strong"
      >
        {languages[0].toUpperCase()}
      </button>

  );
}