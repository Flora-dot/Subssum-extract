import { CustomButton } from "../../components/Button";
import { Transaction } from "../../components/Transaction";
import { transactions } from "../../components/transaction-data";

export const TransactionHistoryPage = () => {
  return (
    <section className="mt-8">
      <CustomButton className={'flex items-center gap-2 text-base font-normal text-placeholder-blue bg-custom-grey-20 border border-custom-grey-30 p-2 h-10 w-48 rounded-lg'}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.59995 12H17.4M4.19995 7.19995H19.8M10.2 16.8H13.8"
            stroke="#78A8D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Filter
      </CustomButton>
      <Transaction />
    </section>
  );
};
