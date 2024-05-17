import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import Button from "@/components/ui/Button";

const Sidebar = () => {
  return (
    <section className="flex flex-col gap-4 border-r h-screen p-3">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link
        href="/"
        className="flex items-center gap-2 hover:bg-gray-100 rounded-full transition-all duration-200 w-fit p-3"
      >
        <HiHome className="w-7 h-7" />
        <span className="font-bold">Home</span>
      </Link>
      <Button>Sign in</Button>
    </section>
  );
};

export default Sidebar;
