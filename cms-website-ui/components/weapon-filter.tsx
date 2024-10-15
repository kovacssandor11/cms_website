"use client"

import {Weapon} from "@/lib/types";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent} from "react";

export default function WeaponFilter({weapon} : {weapon: Weapon[]}) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace}  = useRouter();

    const weaponSelected = searchParams.get("weapons")?.split(",") || [];

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const checked= e.target.checked;
        const params =  new URLSearchParams(searchParams);
        const str = params.get("weapons");
        let set;

        if (str) {
            set = new Set(str.split(","));
        } else {
            set = new Set();
        }
        if (checked) {
            set.add(value);
        } else {
            set.delete(value);
        }
        const arr = Array.from(set);
        params.set("weapons", arr.join(","));
        replace(`${pathName}?${params.toString()}`);
    }

    return (
        <div>
            <label>Weapons</label>
            {weapon.map((weapon) => (
                <div key={weapon.id}>
                    <label>{weapon.Name}</label>
                    <input
                    type={"checkbox"}
                    value={weapon.id}
                    onChange={handleChange}
                    checked={weaponSelected.indexOf(String(weapon.id)) !== -1}
                    />
                </div>
                ))}
        </div>
    );
}