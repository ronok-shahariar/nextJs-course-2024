"use client";

import { useState } from "react";
import { useEffect } from "react";
import useSWR from "swr";

//useEffect hook
//swr, useSwr hook
//with loading state

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientSideDataFetching() {
  //   const [loading, setLoading] = useState(false);//useState(false);
  //   const [users, setUsers] = useState([]);

  //   async function fetchListOfUsers() {
  //     try {
  //       setLoading(true);
  //       const apiResponse = await fetch('https://dummyjson.com/users');
  //       const result = await apiResponse.json();

  //       if (result?.users) {
  //         setUsers(result.users);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       setUsers([]);
  //       setLoading(false);
  //     }
  //   }

  //   useEffect(() => {
  //     fetchListOfUsers();
  //   }, []);

  const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)

  if(error) {
    return  <div>failed to load</div>
  }

  if (isLoading)
    return (
      <h3 className="font-extrabold text-3xl">Loading Users ! Please Wait.</h3>
    );

  return (
    <div>
      <h1 className="pl-7 pt-5 font-bold">Client side data fetching</h1>
      <ul>
        {data  && data?.users && data?.users.length > 0
          ? data?.users.map((user) => (
              <li className="mt-5 cursor-pointer pl-10"> {user.firstName}</li>
            ))
          : null}
      </ul>
    </div>
  );
}
