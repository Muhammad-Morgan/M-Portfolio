import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { Button } from "../Atoms/button";
import { links } from "@/lib/projectsUtils";
import Link from "next/link";
import { SetStateAction } from "react";

const LinksDropdown = ({
  hash,
  setHash,
}: {
  hash: string;
  setHash: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="hover-style cursor-pointer"
        >
          <AlignLeft className="size-5" />
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60 space-y-1 rounded-2xl border border-[#0e3c58]/10 bg-white/90 p-2 shadow-[0_20px_50px_rgba(10,32,48,0.18)] backdrop-blur-xl lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map((link) => {
          //
          //
          return (
            <DropdownMenuItem
              key={link.id}
              className={`group rounded-xl px-0.5 text-sm font-medium ${
                hash === link.href.slice(1)
                  ? "bg-[#0e3c58]/10 text-[#0e3c58]"
                  : "text-[#0e3c58]"
              } transition-colors hover:bg-[#0e3c58]/10 hover:text-[#0e3c58] focus:bg-[#0e3c58]/10`}
            >
              <Link
                onClick={() => setHash(link.href.slice(1))}
                href={link.href}
                className={`flex w-full items-center gap-x-2 rounded-lg px-1 transition-all group-hover:translate-x-1 ${
                  hash === link.href.slice(1) ? "translate-x-1" : ""
                }`}
              >
                <span className="flex size-7.5 items-center justify-center rounded-full bg-[#0e3c58]/10 text-[#0e3c58] shadow-inner">
                  {link.icon}
                </span>
                <span className="capitalize">{link.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
