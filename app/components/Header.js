import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <img src="/Dragonsplat.png" alt="splat" className={style.logo} style={{ width: '40%', height: '40%' }} />
    </div>
  );
};


export default Header;
