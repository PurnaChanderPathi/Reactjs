import { useScrollTrigger } from "@mui/material";
import { useState } from "react";

export default function UseCounter(initialValue) {
    const [value, setValue] = useState(initialValue);
    const increment = () => {
        return setValue(value + 1);
    }
    const decrement = () => {
        return setValue(value - 1);
    }
    const reset = () => {
        return setValue(initialValue);
    }
    return [value, increment, decrement, reset]
}