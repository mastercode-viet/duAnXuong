import { useQuery } from "@tanstack/react-query";
import { getList, getListCategory } from "../provider/dataProvider";
type getListParams = {
    resource: string,
}
const useListCategory = ({resource}:getListParams)=>{
return useQuery({
    queryKey:[resource],
    queryFn:()=>getListCategory({resource})
})
};


export default useListCategory;