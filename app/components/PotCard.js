import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import style from "../styles/PotCard.module.css";
import { useAppContext } from "../context/context";
import { shortenPk } from "../utils/helper";
import { Toaster } from 'react-hot-toast';

const PotCard = () => {
  const {
    lotteryId,
    lotteryPot,
    connected,
    isLotteryAuthority,
    isMasterInitialized,
    initMaster,
    createLottery,
    buyTicket,
    pickWinner,
    claimPrize,
    lotteryHistory,
    isFinished,
    canClaim,
  } = useAppContext();
  // console.log(isMasterInitialized)
  if (!isMasterInitialized)
    return (
      <div className={style.wrapper}>
        <div className={style.title}>
          Lottery <span className={style.textAccent}>#{lotteryId}</span>
        </div>
        {connected ? (
          <>
            <div className={style.btn} onClick={initMaster}>
              Initialize master
            </div>
          </>
        ) : (
          <WalletMultiButton />
        )}
      </div>
    );

  return (
    <div className={style.wrapper}>
  <Toaster />
  <div className={style.title}>
    Lottery <span className={style.textAccent}>#{lotteryId}</span>
  </div>
  <div className={style.pot} style={{ fontFamily: 'Splat', textShadow: '0 0 20px #00ccff', fontWeight: 'normal' }}> JACKPOT: {lotteryPot} SOL</div>
  <div className={style.recentWinnerTitle}>🏆Recent Winner🏆</div>
  <div className={style.winner}>
    {lotteryHistory?.length &&
      shortenPk(
        lotteryHistory[lotteryHistory.length - 1].winnerAddress.toBase58()
      )}
</div>

      {connected ? (
        <>
          {!isFinished && (
            <div className={style.btn} style={{ fontFamily: 'Splat', textShadow: '0 0 10px #00ccff', fontWeight: 'normal' }} onClick={buyTicket}>
              Enter
            </div>
          )}

          {isLotteryAuthority && !isFinished && (
            <div className={style.btn} style={{ fontFamily: 'Splat', textShadow: '0 0 10px #00ccff', fontWeight: 'normal' }} onClick={pickWinner}>
              Pick Winner
            </div>
          )}

          {canClaim && (
            <div className={style.btn} style={{ fontFamily: 'Splat', textShadow: '0 0 10px #00ccff', fontWeight: 'normal' }} onClick={claimPrize}>
              Claim prize
            </div>
          )}

          <div className={style.btn} style={{ fontFamily: 'Splat', textShadow: '0 0 10px #00ccff', fontWeight: 'normal' }} onClick={createLottery}>
            Create lottery
          </div>
        </>
      ) : (
        <WalletMultiButton />
      )}
    </div>
  );
};

export default PotCard;
