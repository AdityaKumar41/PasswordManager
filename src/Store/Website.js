import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const webSlice = createSlice({
  name: "website",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      try {
        fetch("http://localhost:3001/websites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(action.payload),
        }).then((res) => {
          if (res.ok) {
            toast.success("Data added successfully");
          } else {
            toast.error("Something went wrong");
          }
        });
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
      }
    },
    remove: (state, action) => {
      const id = action.payload;
      try {
        fetch(`http://localhost:3001/websites/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.ok) {
            toast.success("Data deleted successfully");
          } else {
            toast.error("Something went wrong");
          }
        });
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
      }
      return state.filter((item) => item.id !== id);
    },
  },
});

export const webstate = webSlice.actions;

export default webSlice.reducer;
