import { Skeleton } from "@/components/ui/skeleton";

export default function HeaderSkeleton() {
  return (
    <div className="flex items-center">
      <div>
        <Skeleton className="size-7 text-muted-foreground mr-7" />
      </div>
      <div>
        <Skeleton className="size-7 text-muted-foreground mr-7" />
      </div>
      <Skeleton className="size-8 rounded-full" />
    </div>
  );
}
