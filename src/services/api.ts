const KEY = "b49d087d24504786abd232325220706";

export interface ICityResponse {
    location: {
        name: string;
        region: string;
        country: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    };
}

export async function fetchData(city: string): Promise<ICityResponse> {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
    const fetchResponse = await fetch(url);

    return await fetchResponse.json();
}
