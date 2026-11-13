import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MarketSwitch from "./MarketSwitch";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <Suspense>
          <MarketSwitch />
        </Suspense>
      </div>
    </header>
  );
};
export default Header;
