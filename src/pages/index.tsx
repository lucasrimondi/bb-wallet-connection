import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import CustomButton from "../components/CustomButton";

export default function HomePage() {
  return (
    <>
      {/* Predefined button  */}
      <Web3Button icon="hide" label="Connect Wallet TEST" balance="hide" />
      <br />

      {/* Network Switcher Button */}
      <Web3NetworkSwitch />
      <br />

      {/* Custom button */}
      <CustomButton />
    </>
  );
}
