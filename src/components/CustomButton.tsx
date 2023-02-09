import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
// import { useWeb3ModalTheme } from "@web3modal/react";

export default function CustomButton() {
  //TO CUSTOMIZE MODAL AND BUTTONS
  //   const { theme, setTheme } = useWeb3ModalTheme();

  //   // Modal's theme object
  //   console.log(theme);

  //   // Set modal theme
  //   setTheme({
  //     themeMode: "light",
  //     themeColor: "teal",
  //     themeBackground: "themeColor",
  //   });

  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const label = isConnected ? "Disconnect" : "Connect Custom";

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  function onClick() {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }

  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? "Loading..." : label}
    </button>
  );
}
