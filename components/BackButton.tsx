import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  text: string;
  link: string;
}

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className="text-gray-500 flex hover:underline mb-5 items-center font-bold gap-1"
    >
      <ArrowLeftCircle /> {text}
    </Link>
  );
};

export default BackButton;
