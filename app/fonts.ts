
import localFont from "next/font/local";

export const almarai = localFont({
  src: [
    {
      path: "../public/fonts/Almarai/Almarai-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Almarai/Almarai-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Almarai/Almarai-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Almarai/Almarai-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-almarai",
});

export const mozillaText = localFont({
  src: [
    {
      path: "../public/fonts/Mozilla_Text/MozillaText-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Mozilla_Text/MozillaText-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Mozilla_Text/MozillaText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Mozilla_Text/MozillaText-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Mozilla_Text/MozillaText-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Mozilla_Text/MozillaText-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mozilla",
});