import Head from "next/head";
import styles from "@/styles/Home.module.css";


export default function Home() {
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
          <button
            className={styles.login}
            onClick={() => console.log("probando nueva lib")}
          >
            <h6>Connect Wallet</h6>
          </button>
          {false ? (
            <>
              <span>
                Connected with <b>{"account"}</b>
              </span>
              <button
                className={styles.login}
                onClick={() => console.log("probando nueva lib")}
              >
                <h6>Disconnect</h6>
              </button>
            </>
          ) : (
            <span>Not connected</span>
          )}
        </div>
      </main>
    </>
  );
}
