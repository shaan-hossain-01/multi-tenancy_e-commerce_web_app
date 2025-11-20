import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@payload-types";

interface CategoryDropdownProps {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

const CategoryDropdown = ({ category, isActive, isNavigationHovered }: CategoryDropdownProps) => {
  return (
    <Button variant="elevated" className={cn("h-11 px-4 bg-transparent border-transparent hover:bg-white hover:border-primary text-black rounded-full")}>
        {category.name}
    </Button>
  )
}

export default CategoryDropdown