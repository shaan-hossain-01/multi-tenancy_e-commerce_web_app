"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@payload-types";
import { useRef, useState } from "react";
import { useDropdownPosition } from "./useDropdownPosition";
import SubcategoryMenu from "./SubcategoryMenu";

interface CategoryDropdownProps {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

const CategoryDropdown = ({ category, isActive, isNavigationHovered }: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {getDropdownPosition}= useDropdownPosition(dropdownRef);
  const onMouseEnter = ()=>{
    if(category.subcategories){
      setIsOpen(true);
    }
  }

  const onMouseLeave = ()=>{
    setIsOpen(false);
  }

  const dropdownPosition = getDropdownPosition();

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={dropdownRef}
    >
      <div className="relative">
    <Button variant="elevated" className={cn("h-11 px-4 bg-transparent border-transparent hover:bg-white hover:border-primary text-black rounded-full",
      isActive && !isNavigationHovered && "bg-white border-primary",
      isOpen && "bg-white border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[4px] -translate-y-[4px]"
    )}>
        {category.name}
    </Button>
    <div 
      className={cn("opacity-0 absolute -bottom-3 left-1/2 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-10 border-b-black -translate-x-1/2", isOpen && "opacity-100",)}
    />
      </div>
      <SubcategoryMenu
        category={category}
        isOpen={isOpen}
        position={dropdownPosition}
      />
    </div>
  )
}

export default CategoryDropdown