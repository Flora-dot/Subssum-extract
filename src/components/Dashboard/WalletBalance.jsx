import { useState } from "react"
import { CustomButton } from "../Button"

export const WalletBalance = () => {
    const [walletBalance, setWalletBalance] = useState('3000');
    return(
        <div className="flex justify-between p-6 rounded-2xl border-2 border-custom-grey-30 w-full">
            <div>
                <p className="text-base font-normal text-custom-grey-90 font-sans">Wallet Balance</p>
                <h6 className="font-semibold text-4xl text-custom-grey-90 mt-1">&#8358;{walletBalance}</h6>
            </div>
            <CustomButton children={'Fund Wallet'} className={'font-semibold text-base text-custom-white bg-custom-primary-blue py-1 px-12 h-12 rounded-xl'}/>
        </div>
    )
}