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
        className="w-60 space-y-1 rounded-2xl border border-border bg-card/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden"
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
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground"
              } transition-colors hover:bg-muted hover:text-foreground focus:bg-muted`}
            >
              <Link
                onClick={() => setHash(link.href.slice(1))}
                href={link.href}
                className={`flex w-full items-center gap-x-2 rounded-lg px-1 transition-all group-hover:translate-x-1 ${
                  hash === link.href.slice(1) ? "translate-x-1" : ""
                }`}
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-accent/15 text-accent shadow-inner">
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
