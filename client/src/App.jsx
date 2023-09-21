import { ethers } from "ethers";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserProvider, Contract, ContractFactory } from "ethers";
import { abi, bytecode } from "./contract/chai.json";

const App = () => {
  const [contractInstance, setContractInstance] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("Not connected");

  useEffect(() => {
    const contractData = async () => {
      const contractAddress = "0x6711180B5bE10e2BCf2eA27F5f15bEf2dd55b38a";
      const contractAbi = abi;
      const contractByteCode = bytecode;

      /* Metamask */
      if (typeof window.ethereum !== "undefined") {
        try {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(account);
          const provider = new ethers.BrowserProvider(window.ethereum); // read the blockchain
          const signer = provider.getSigner(); // write to the blockchain

          const contract = new ethers.ContractFactory(
            contractAbi,
            contractByteCode,
            signer
          ); // create a new contract
          console.log(contract);
          setContractInstance({ provider, signer, contract });
        } catch (error) {
          console.log(error);
        }
        const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log(accounts);
      } else {
        console.log("Error!!");
      }
    };

    contractData();
  }, []);

  return <div>App</div>;
};

export default App;
