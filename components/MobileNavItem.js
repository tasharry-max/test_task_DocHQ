import Link from "next/link";

const MobileNavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <p className={`nav__link`}>{text}</p>
    </Link>
  );
};

export default MobileNavItem;