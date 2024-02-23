import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi, //same as -> (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Booking successfully deleted"); //umjesto: alert(...)
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message), //umjesto: alert(err.message),
  });
  return { isDeleting, deleteBooking };
}
