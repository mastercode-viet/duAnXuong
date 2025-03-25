import { useQuery } from "@tanstack/react-query";
import { getList } from "../provider/dataProvider";
type getListParams = {
    resource: string,
}
const useList = ({ resource }: getListParams) => {
    return useQuery({
        queryKey: [resource],
        queryFn: () => getList({ resource })
    })
};


export default useList;
