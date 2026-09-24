import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllUrl } from "../api/UrlApi";
import { axiosInstance } from "../../api/axiosInstance";

const useUrlHook = () => {
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");
  const [currentUrl, setcurrentUrl] = useState([]);
  const [iscopied, setIscopied] = useState(null)

  let { data, isPending } = useQuery({
    queryKey: ["url"],
    queryFn: getAllUrl,
  });

  const shortendUrl = async () => {
    try {
      let res = await axiosInstance.post("/create", { url: input });
      setInput("");
      setcurrentUrl([...currentUrl, res.data.data.newUrl.originalUri]);
      queryClient.invalidateQueries({
        queryKey: ["url"],
      });
      // return res
    } catch (error) {
      console.log("error in shortend url api", error);
    }
  };

  const deleteUrl = async (id) => {
    try {
      await axiosInstance.delete(`/${id}`);

      queryClient.invalidateQueries({
        queryKey: ["url"],
      });
      alert("Url deleted. 🗑")
    } catch (error) {
      console.log("error in delete api", error);
    }
  };

  const copyUrl = async (url,index) => {
    try {
      await navigator.clipboard.writeText(url);
      setIscopied(index)
      setTimeout(() => {
        setIscopied(null)
      }, 1000);

    } catch (error) {
      console.log("Failed to copy", error);
    }   
  };

  return {
    data,
    isPending,
    setInput,
    shortendUrl,
    input,
    deleteUrl,
    setcurrentUrl,
    currentUrl,
    copyUrl,
    iscopied
  };
};

export default useUrlHook;
