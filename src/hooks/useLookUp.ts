interface Props<T> {
    data?: T[];
    id?: number;
}

const useLookUp = <T extends { id: number; name: string }>({
    data,
    id,
}: Props<T>) => {
    return data?.find((d) => d.id === id)?.name;
};

export default useLookUp
