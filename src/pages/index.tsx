import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
//'injected' is the name of the metamask connector
import { injected } from "../components/wallet/connectors";

export default function Home() {
  //this is a hook that provides context from web3 connection. Thats why you have to wrap your app (_app.tsx) in web3 provider
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connectMetamask() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      <Head>
        <title>Connecting wallet test</title>
        <meta name="description" content="BB first approach" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.metamaskContainer}>
          <button className={styles.login} onClick={connectMetamask}>
            <h6>Connect Metamask</h6>
          </button>
          {active ? (
            <>
              <span>
                Connected with <b>{account}</b>
              </span>
              <button className={styles.login} onClick={disconnect}>
                <h6>Disconnect</h6>
              </button>
            </>
          ) : (
            <span>Not connected</span>
          )}
          {/* <button
              className={styles.login}
              onClick={() => console.log('connect wallet')}
            >
              <h6>Wallet Connect</h6>
            </button> */}
        </div>
      </main>
    </>
  );
}
