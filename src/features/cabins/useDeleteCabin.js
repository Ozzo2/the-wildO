import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi, //same as -> (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted"); //umjesto: alert(...)
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message), //umjesto: alert(err.message),
  });
  return { isDeleting, deleteCabin };
}
