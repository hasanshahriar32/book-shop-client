import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import UseRole from "../../../UseRole/UseRole";


const SideNav = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [userRole] = UseRole(user);
  console.log(userRole);
  return (
    <div className="sidenav">

      {userRole === "Seller" || userRole === "admin" ? (
        <>
          {userRole === "admin"  && (
            <>
              <p>
                <Link to="allseller">All Seller</Link>
              </p>
              <p>
                <Link to="allbuyers">All Buyer</Link>
              </p>
              <p>
                <Link to="reportitem">Reported Item</Link>
              </p>
            </>
          )}

          {userRole === "Seller"  && (
            <>
              <p>
                <Link to="addproduct">Added Product</Link>
              </p>
              <p>
                <Link to="myproudct">My Product</Link>
              </p>
            </>
          )}
        </>
      ) 
      : 
      (
        <>
          {(userRole === "Buyer" || user?.uid) && (
            <p>
              <Link to={`myorders/${user?.email}`}>My Orders</Link>
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default SideNav;
