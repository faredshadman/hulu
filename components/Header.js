import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
const items = [
  {
    title: "HOME",
    Icon: HomeIcon,
  },
  {
    title: "TRENDING",
    Icon: LightningBoltIcon,
  },
  {
    title: "VERIFIED",
    Icon: BadgeCheckIcon,
  },
  {
    title: "COLLECTIONS",
    Icon: CollectionIcon,
  },
  {
    title: "SEARCH",
    Icon: SearchIcon,
  },
  {
    title: "ACCOUNT",
    Icon: UserIcon,
  },
];
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {items.map((item) => (
          <HeaderItem key={item.title} title={item.title} Icon={item.Icon} />
        ))}
      </div>
      <Image
        className="object-contain"
        src="/img/hulu-white.webp"
        width={200}
        height={100}
        alt="HULU"
      />
    </header>
  );
};

export default Header;
