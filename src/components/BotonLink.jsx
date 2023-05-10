import Link from "next/link";

const BotonLink = ({ href, text, className, style }) => {
  return (
    <Link
      href={href}
      className={`border-2 rounded-lg px-2 mx-2 ${className}`}
      style={style}
    >
      {text}
    </Link>
  );
};

export default BotonLink;
