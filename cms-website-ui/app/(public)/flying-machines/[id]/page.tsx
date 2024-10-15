import {getFlyingMachineById} from "@/lib/api";
import Image from "next/image";
import RadarChart from "@/components/radar-chart";

export default async function Page({params} : {params: {id: string}}) {
    const {id} = params;
    const machine = await getFlyingMachineById(id);

    return (
        <div className={"max-w-screen-md m-auto bg-slate-200 p-5 my-5"}>
            <h2 className={"font-bold"}>{machine.data.Name}</h2>
            <div className="grid grid-cols-3 gap-5">
            <div>
                <Image src={process.env.STRAPI_BASE_URL + machine.data.Image.url} alt={"Machine Data"} width={500} height={500} className={"col-span-2"}/>
            </div>
            <div className={"col-span-1 flex flex-col gap-5"}>
                {machine.data.Description}
                <RadarChart attrs={machine.data} />
            </div>
            </div>
        </div>
    );
}