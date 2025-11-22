import { RefObject } from "react";

export const useDropdownPosition = (ref: RefObject<HTMLDivElement| null> | RefObject<HTMLDivElement>)=>{
    const getDropdownPosition = ()=>{
        if(!ref.current) return {top: 0, left: 0};
        const rect = ref.current.getBoundingClientRect();
        const dropdownWidth = 240; // Assuming a fixed width for the dropdown

        //Calculate the inital position
        const top = rect.bottom + window.scrollY;
        let left = rect.left + window.scrollX;

        //Adjust left position if dropdown overflows the viewport
        if(left + dropdownWidth > window.innerWidth){
            left = rect.right + window.scrollX - dropdownWidth;
        }

        //If still overflows on the left side, set left to 16px
        if(left < 0){
            left = 16; //16px padding from the left edge
        }
        return {top, left};
    }

    return{getDropdownPosition};
}