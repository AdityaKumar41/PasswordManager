import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { webstate } from "../Store/Website";
import Skeleton from "../skeleton/skeleton";
import Empty from "./Empty";
import { IconCopy } from "@tabler/icons-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const View = () => {
  const [fetchData, setFetchData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    // useDispatch(webstate.remove);
  };
  const handleDelete = (id) => {
    dispatch(webstate.remove(id));
  };
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };
  const handlePassCopy = (text) => {
    const orgpass = atob(text);
    navigator.clipboard.writeText(orgpass);
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3001/websites");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      {isLoading && <Skeleton />}
      {!isLoading && users.length === 0 && <Empty />}
      {!isLoading && (
        <div className="relative flex w-[calc(80vw)]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h1 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black mb-6"></h1>
            <div className="block">
              <div className="relative block w-full  bg-transparent">
                <div
                  role="tabpanel"
                  className="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-[calc(58vh)] overflow-auto"
                  data-value="card"
                >
                  {users.map(
                    (item) => (
                      console.log(item),
                      (
                        <div class="grid grid-cols-12 gap-4 my-8" key={item}>
                          <div className="col-span-4 flex gap-2 align-middle">
                            <div>{item.url}</div>{" "}
                            <div onClick={() => handleCopy(item.url)}>
                              <Popup
                                trigger={
                                  <button className="button">
                                    {" "}
                                    <IconCopy />
                                  </button>
                                }
                                position="right center"
                              >
                                <div>Copied!</div>
                              </Popup>
                            </div>
                          </div>
                          <div className="col-span-3 flex gap-2 align-middle">
                            <div>{item.username}</div>{" "}
                            <div onClick={() => handleCopy(item.username)}>
                              <Popup
                                trigger={
                                  <button className="button">
                                    {" "}
                                    <IconCopy />
                                  </button>
                                }
                                position="right center"
                              >
                                <div>Copied!</div>
                              </Popup>
                            </div>
                          </div>
                          <div className="col-span-3 flex gap-2 align-middle">
                            <div>{item.password}</div>
                            <div onClick={() => handlePassCopy(item.password)}>
                              <Popup
                                trigger={
                                  <button className="button">
                                    {" "}
                                    <IconCopy />
                                  </button>
                                }
                                position="right center"
                              >
                                <div>Copied!</div>
                              </Popup>
                            </div>
                          </div>

                          <button className="" onClick={handleUpdate}>
                            Update
                          </button>
                          <button
                            className=""
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      )
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default View;
