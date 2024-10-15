"use client"

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent} from "react";

export default function SortByAttribute() {
    const attrs = ["Attack", "Defense", "Agility", "Speed", "Capacity"];
    
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();

    const attrSelected = searchParams.get("sort") || "";

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        replace(`${pathName}?${params.toString()}`);
    }

    return (
        <div className={"flex flex-col gap-5"}>
            <label>
                Sort
            </label>
            <select onChange={handleChange} value={attrSelected}>
                <option value={""}></option>
                {attrs.map((attr) => (
                    <option key={attr+ ":desc"} value={attr + ":desc"}>
                        {attr} High to Low
                    </option>
                ))}
                {attrs.map((attr) => (
                    <option key={attr+ ":asc"} value={attr + ":asc"}>
                        {attr} Low to High
                    </option>
                ))}
            </select>
        </div>
    );
}