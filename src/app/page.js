import React from "react";
// import '@/app/globals.css'
import LeftNav from "./Components/LeftNav";
import Header from './Components/Header';
import Sales from './Components/Sales';
import Customers from './Components/Customers';
import PieChart from "./Components/PieChart";
import AllProducts from "./Components/AllProducts";
import AbandonedCart from "./Components/AbandonedCart";
import Bargraph from './Components/Bargraph';
import AllOrders from "./Components/AllOrders";
import RecentOrders from "./Components/RecentOrders";

function page() {
  return (
    <div className="flex">
      <LeftNav />
      <div className="">
        <Header />
        <div className="flex">
          <div className="flex">
            <div>
              <div className='flex gap-2'>
                <Sales />
                <Customers />
              </div>
              <div className='flex gap-4'>
                <PieChart />
                <div>
                  <AllProducts />
                  <AbandonedCart />
                </div>
              </div>
              <Bargraph />
            </div>
          </div>
          <div>
            <AllOrders />
            <RecentOrders/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
