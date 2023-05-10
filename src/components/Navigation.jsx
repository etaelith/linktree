"use client";
import { hexToRgb } from "@/utils/hexColor";

import { usePathname } from "next/navigation";

import BotonLink from "./BotonLink";
const defaultColorState = {
  backgroundImage: "asdsad",
  buttonColor: "#000000",
  textColor: "#ffffff",
};
const Navigation = ({ state }) => {
  const router = usePathname();
  const colorState = state || defaultColorState;
  const id = router.split("/")[1];
  const element = (
    <BotonLink
      href={`${router === `/${id}` ? `/${id}/dashboard` : `/${id}`}`}
      className=""
      style={{
        background: `${hexToRgb(colorState.buttonColor, 0.6)}`,
        color: `${hexToRgb(colorState.textColor)}`,
      }}
      text={`${router === `/${id}` ? "dashboard" : "View"}`}
    />
  );
  return (
    <nav className="absolute top-0 right-0">
      <div className="mt-4 mr-2">
        <BotonLink
          href={`${router === "/" ? `/5/dashboard` : "/"}`}
          className=""
          style={{
            background: `${hexToRgb(colorState.buttonColor, 0.6)}`,
            color: `${hexToRgb(colorState.textColor)}`,
          }}
          text={`${router === "/" ? "dashboard" : "Home"}`}
        />
        {id && router === `/${id}`
          ? element
          : router === `/${id}/dashboard`
          ? element
          : null}
      </div>
    </nav>
  );
};

export default Navigation;
