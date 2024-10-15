"use client"

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent} from "react";

export default function ScoreFilters({attr} : {attr: string}) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();

    const scoreSelected =  searchParams.get(attr) || -1;
    
    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);
        if (!value) {
            return;
        }

        if (value === '-1' ){
            params.delete(attr);
            replace(`${pathName}?${params.toString()}`);
            return;
        }

        params.set(attr, value);
        replace(`${pathName}?${params.toString()}`);
    }

    return (
        <div className={"flex justify-between"}>
            <label>{attr}</label>
            <select onChange={handleChange} value={scoreSelected ? parseInt(scoreSelected as string) : undefined}>
                <option value={-1}></option>
                <option value={5}>5</option>
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
            </select>
        </div>
    );
}