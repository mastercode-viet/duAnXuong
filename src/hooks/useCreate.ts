import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOne } from "../provider/dataProvider";



type useCreateParams = {
    resource: string;
}
const useCreate = ({ resource }: useCreateParams) => {
    // gọi useQueryClient để làm mới API ( gọi lại API )
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (variables: string) => {
            return createOne({ resource, variables })
        },
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [resource]
        })
    })
}
export default useCreate;