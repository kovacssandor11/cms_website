import {getFlyingMachines, getWeapons} from "@/lib/api";
import Image from 'next/image'
import Pagination from "@/components/pagination";
import {FlyingMachineSearchParams, Machine, Weapon} from "@/lib/types";
import ScoreFilters from "@/components/score-filters";
import WeaponFilter from "@/components/weapon-filter";
import SortByAttribute from "@/components/sort-by-attribute";
import Link from "next/link";

export default async function Page({searchParams} : {searchParams: FlyingMachineSearchParams }) {
    const flyingMachines = await getFlyingMachines(searchParams);
    const weapons = await getWeapons();

    return (
        <div className={"grid grid-cols-12"}>
        <div className={"col-span-3 bg-gray-100 p-5 flex flex-col gap-5"}>
            <h2 className={"font-bold"}>Attributes</h2>
            <ScoreFilters attr={"Attack"}/>
            <ScoreFilters attr={"Defense"}/>
            <ScoreFilters attr={"Speed"}/>
            <ScoreFilters attr={"Agility"}/>
            <ScoreFilters attr={"Capacity"}/>
            <WeaponFilter weapon={weapons.data} />
            <SortByAttribute />
        </div>
            <div className={"col-span-9"}>
                <div className="p-5 grid grid-cols-3 gap-5">
                <div className={"col-span-9 p-5 grid grid-cols-3 gap-5"}>{flyingMachines.data.map((machine: Machine) => (
                    <div key={machine.id} className={"bg-zinc-100 flex flex-col gap-5 items-center py-5"}>
                        <Link href={`/flying-machines/${machine.documentId}`}>
                        <Image height={156} width={156} alt={"Image"}
                               src={process.env.STRAPI_BASE_URL + machine.Image.url}/>
                        </Link>
                        <div>{machine.Name}</div>
                        <div className={"grid grid-cols-3 gap-5"}>
                            <div>💈{machine.Attack}</div>
                            <div>🐾{machine.Defense}</div>
                            <div>🐘{machine.Speed}</div>
                        </div>
                        <div className={"flex gap-5"}>
                            {machine.weapons.map((weapon: Weapon) => (
                                <div key={weapon.Name} className={"bg-green-200 rounded-lg p-1 text-sm font-bold"}>{weapon.Name}</div>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
                    <div className={"p-5"}><Pagination pagination={flyingMachines.meta.pagination}/></div>
                </div>
            </div>
        </div>
    );
}