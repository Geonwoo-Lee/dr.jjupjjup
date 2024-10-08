import {FoodItem} from "@/src/app/types/models/food";
import {Dispatch, SetStateAction} from "react";

export interface DeckProps {
    cards: FoodItem[];
    setStep?: Dispatch<SetStateAction<"0" | "1" | "2">>
}