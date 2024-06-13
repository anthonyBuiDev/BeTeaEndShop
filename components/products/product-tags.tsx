"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "../ui/badge";

export default function ProductTags() {
  const router = useRouter();
  const params = useSearchParams();
  const tag = params.get("tag");

  const setFilter = (tag: string) => {
    if (tag) {
      router.push(`?tag=${tag}`);
    }
    if (!tag) {
      router.push("/");
    }
  };

  return (
    <div className="my-4 flex items-center justify-center gap-4">
      <Badge
        onClick={() => setFilter("")}
        className={cn(
          "hover:bg-blue/75 cursor-pointer bg-blue-500 hover:opacity-100",
          !tag ? "opacity-100" : "opacity-50",
        )}
      >
        All
      </Badge>
      <Badge
        onClick={() => setFilter("red")}
        className={cn(
          "cursor-pointer bg-red-500 hover:bg-red-600 hover:opacity-100",
          tag === "blue" && tag ? "opacity-100" : "opacity-50",
        )}
      >
        Red
      </Badge>
      <Badge
        onClick={() => setFilter("white")}
        className={cn(
          "cursor-pointer bg-slate-200 text-black hover:bg-slate-300 hover:opacity-100",
          tag === "green" && tag ? "opacity-100" : "opacity-50",
        )}
      >
        White
      </Badge>
      <Badge
        onClick={() => setFilter("black")}
        className={cn(
          "cursor-pointer bg-black hover:bg-black/75 hover:opacity-100",
          tag === "purple" && tag ? "opacity-100" : "opacity-50",
        )}
      >
        Black
      </Badge>
    </div>
  );
}
