"use client";
import { ColorContext } from "@/context/ColorProvider";
import { hexToRgb } from "@/utils/hexColor";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import BotonLink from "./BotonLink";

const Navigation = () => {
  const router = usePathname();
  const { state } = useContext(ColorContext);
  const { buttonColor, textColor } = state;
  const id = router.split("/")[1];
  const element = (
    <BotonLink
      href={`${router === "/5" ? `/${id}/dashboard` : "/5"}`}
      className=""
      style={{
        background: `${hexToRgb(buttonColor, 0.6)}`,
        color: `${hexToRgb(textColor)}`,
      }}
      text={`${router === "/5" ? "dashboard" : "View"}`}
    />
  );
  return (
    <nav className="absolute top-0 right-0">
      <div className="mt-4 mr-2">
        <BotonLink
          href={`${router === "/" ? `/5/dashboard` : "/"}`}
          className=""
          style={{
            background: `${hexToRgb(buttonColor, 0.6)}`,
            color: `${hexToRgb(textColor)}`,
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
