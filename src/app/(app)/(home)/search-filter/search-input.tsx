import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface Props {
    disabled?: boolean;
}

const SearchInput = ({ disabled }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full">
        <div className="relative w-full">
            <SearchIcon />
            <Input disabled={disabled} />
        </div>
    </div>
  )
}

export default SearchInput