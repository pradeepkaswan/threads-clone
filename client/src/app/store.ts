import { create } from "zustand"

const useDialog = create((set) => ({
  openDialog: false,
  setOpenDialog: (open) => set({ openDialog: open }),
}))

export default useDialog
