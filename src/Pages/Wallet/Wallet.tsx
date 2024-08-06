import BottomNavbar from "../../Components/BottomNavbar"
import Transactions from "./Transactions"
import { WalletBanner } from "./WalletBanner"

export const Wallet = () => {
  return (
    <section>
        <main className=" p-3 mb-16 flex flex-col ">
            <div className="flex justify-center">
            <WalletBanner/>
            </div>
            <Transactions/>
        </main>
        <BottomNavbar/>
    </section>
  )
}
