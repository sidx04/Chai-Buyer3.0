import { ethers } from "ethers";
import React from "react";

const Buy = ({ contractInstance }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = contractInstance;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    // let amount = document.querySelector("#amount").value;
    // amount = { value: ethers.parseEther("0.01") };
    const amount = { value: ethers.parseEther("0.001") };
    const txResponse = await contract.buyChai(name, message, amount);
    await txResponse.wait();
    console.log("Transaction is successful...");
  };
  return (
    <>
      <div className="center">
        <form onSubmit={buyChai}>
          <input id="name"></input>
          <input
            id="message"
            className="border py-2 px-3 text-grey-darkest"
          ></input>
          {/* <input id="amount"></input> */}
          <button>Pay!</button>
        </form>
      </div>
    </>
  );
};

export default Buy;
