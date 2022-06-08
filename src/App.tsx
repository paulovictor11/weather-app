import { FormEvent, useState } from "react";
import { Card } from "./components/Card";
import { fetchData, ICityResponse } from "./services/api";

export function App() {
    const [city, setCity] = useState("");
    const [data, setData] = useState<ICityResponse | null>(null);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const response = await fetchData(city);
        setData(response);
    }

    return (
        <div className="flex flex-col w-full h-screen items-center p-4 sm:justify-center">
            <form
                onSubmit={handleSubmit}
                className="fixed bottom-0 w-full flex p-4 justify-center sm:relative"
            >
                <input
                    type="text"
                    placeholder="Cidade"
                    className="p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px]"
                    value={city}
                    onChange={({ target }) => setCity(target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-semibold"
                >
                    Pesquisar
                </button>
            </form>

            <Card data={data} />
        </div>
    );
}
