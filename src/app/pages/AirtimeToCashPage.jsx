import { FillInfo } from "../../components/AirtimeToCash/FillInfo"

export const AirtimeToCashPage = () => {
    return (
        <section className="w-6/12 mx-auto mt-9">
            <div className=" flex w-full gap-4">
                <div className="w-1/3">
                    <p className="text-base text-center font-semibold text-custom-primary-blue">Fill Info</p>
                    <div className="h-2 w-full mt-2 bg-custom-primary-blue rounded-lg"></div>
                </div>
                <div className="w-1/3 opacity-30">
                    <p className="text-base text-center font-semibold text-custom-primary-blue">Make Payment</p>
                    <div className="h-2 w-full  mt-2 bg-custom-primary-blue rounded-lg"></div>
                </div>
                <div className="w-1/3 opacity-30">
                    <p className="text-base text-center font-semibold text-custom-primary-blue">View Reciept</p>
                    <div className="h-2 full  mt-2 bg-custom-primary-blue rounded-lg"></div>
                </div>
            </div>
            <FillInfo />
        </section>
    )
}