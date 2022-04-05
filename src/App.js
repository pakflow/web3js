import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { injected } from "../components/wallet/connectors";
import React from "react";
import Web3 from 'web3';

const App = () => {
  function getLibrary(provider) {
    return new Web3(provider)
  }
  const { active, account, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <button onClick={connect}>Get public key</button>
        {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
        <button onClick={disconnect}>Disconnect</button>
      </Web3ReactProvider>
    </>
  );
};

export default App;
