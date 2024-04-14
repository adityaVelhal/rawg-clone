import { useEffect, useState } from "react";
import Genre from "../models/Genre"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse <T>{
    count: number
    results: T[]
}

const useData = <T>(enpoint: string) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        
        const controller = new AbortController();

        apiClient.get<FetchResponse<T>>(enpoint, {signal: controller.signal}).then(res => {
            setData(res.data.results)
            setLoading(false)
        }).catch(err => {
            setLoading(false);
            if(err instanceof CanceledError) return;
            setError(err.message)
        })

        return () => controller.abort()
    })

    return { data, error, isLoading}
}

export default useData;