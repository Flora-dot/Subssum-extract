import { SavedCards } from "../../components/Dashboard/CreditCard"
import { ReferralCode } from "../../components/Dashboard/ReferalCode"
import { TotalReferrals } from "../../components/Dashboard/TotalReferrals"
import { WalletBalance } from "../../components/Dashboard/WalletBalance"
import { HeaderSignedIn } from "../../components/Header/Header"

export const DashboardPage = () => {
    return(
        <section className="">
            <HeaderSignedIn />
            <div className="mt-8 flex gap-10">
                <div className="flex flex-col gap-5 w-2/5">
                    <WalletBalance />
                    <ReferralCode />
                    <TotalReferrals />
                </div>
                <SavedCards />
            </div>
        </section>
    )
}