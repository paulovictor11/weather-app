import { ICityResponse } from "../services/api";

type CardProps = {
    data: ICityResponse | null;
};

export function Card({ data }: CardProps) {
    return (
        <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
            <div className="text-center">
                <span className="block text-xl text-slate-700 font-bold">
                    {data?.location.name ?? "-"}
                </span>
                <span className="text-slate-400 text-sm font-medium">
                    {data?.location.region ?? "-"},{" "}
                    {data?.location.country ?? "-"}
                </span>
            </div>

            <div className="text-slate-700 font-bold justify-center flex my-4">
                <span className="text-8xl">{data?.current.temp_c ?? "0"}</span>
                <span className="text-2xl mt-3">ºC</span>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img
                    src={data?.current.condition.icon}
                    alt="Weather Condition Icon"
                />
                <span className="text-slate-700 font-medium">
                    {data?.current.condition.text ?? "-"}
                </span>
            </div>
        </div>
    );
}
