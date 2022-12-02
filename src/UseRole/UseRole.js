import { useEffect, useState } from "react";

const UseRole = (user) => {
    const [userRole, setUserRole] = useState("");
    useEffect(() => {
        if (user) {
          fetch(`https://book-shop-server.vercel.app/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserRole(data[0].roleIndentify));
        }
      }, [user]);
  return [userRole];
};

export default UseRole;