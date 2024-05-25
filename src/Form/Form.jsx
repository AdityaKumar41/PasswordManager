import { IconEye, IconEyeOff } from "@tabler/icons-react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import Nav from "./Nav";
import ReactLoading from "react-loading";
import { webstate } from "../Store/Website";
import { useSelector, useDispatch } from "react-redux";

const FormContent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  //this is generate unique id
  const genereateUniqueId = () => Math.random().toString(36).substr(2, 9);
  const onSubmitFn = async (data) => {
    const encodedPass = btoa(data.password);
    const updatedData = { ...data, password: encodedPass };
    try {
      const res = dispatch(webstate.add(updatedData));
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }

    reset();
    return redirect("/view");
  };
  return (
    <div className="relative flex w-[calc(80vw)]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <div className="block overflow-visible">
          <div className="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
            <div
              role="tabpanel"
              className="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
              data-value="card"
            >
              <form
                className="flex flex-col gap-4 mt-12"
                onSubmit={handleSubmit(onSubmitFn)}
              >
                <div className="flex items-center gap-4 my-4">
                  <div>
                    <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                      Your URL:
                    </p>
                    <div className="relative h-10 w-full min-w-[400px]">
                      <input
                        type="url"
                        placeholder="https://example.com"
                        {...register("url", { required: "URL is required" })}
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                      Username
                    </p>
                    <div className="relative h-10 w-full min-w-[300px] ">
                      <input
                        placeholder="name@mail.com"
                        {...register("username", {
                          required: "Username is required",
                        })}
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                      Password
                    </p>
                    <div className="relative h-10 w-full min-w-[300px] ">
                      <input
                        placeholder="********"
                        {...register("password", {
                          required: "Password is required",
                        })}
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type={showPassword ? "text" : "password"}
                        autoComplete="on"
                      />
                      <span
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 cursor-pointer dark:text-white"
                        onClick={togglePassword}
                      >
                        {showPassword ? (
                          <IconEyeOff className="text-blue-950" />
                        ) : (
                          <IconEye className="text-blue-950" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[calc(70vw)] flex justify-center align-middle">
                  <button
                    className="relative mt-5 h-10 w-1/2 md:w-1/4 border-none bg-gray-50 dark:bg-gray-900 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 font-medium	"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <ReactLoading
                        type={"bubbles"}
                        className="absolute top-0 bottom-0 m-auto left-0 right-0"
                        color="#fff"
                      />
                    ) : (
                      "Add"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
