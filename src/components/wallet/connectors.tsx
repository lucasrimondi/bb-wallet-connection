import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

//injected connector is the connector for Metamask
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const walletconnect = new WalletConnectConnector({
  // rpc: { [constants.chainId()]: constants.rpcUrl() },
  // chainId: constants.chainId(),
  // supportedChainIds: [constants.chainId()],
  qrcode: true,
  bridge: "https://walletconnect-bridge.rifos.org/",
  qrcodeModalOptions: {
    mobileLinks: ["metamask", "defiant", "xcapit"],
    desktopLinks: [],
  },
});
