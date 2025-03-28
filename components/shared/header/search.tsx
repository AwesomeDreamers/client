import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <form className="flex items-center bg-[#202024] rounded-full px-3 py-1">
      <Input
        placeholder="스토어 검색"
        className="border-none focus-visible:ring-0"
      />
      <Icon.search className="size-7 text-muted-foreground ml-1" />
      <Button type="submit" className="hidden" />
    </form>
  );
}
