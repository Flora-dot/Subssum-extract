import { support } from "../../components/supportlist";

export const HelpSupportPage = () => {
  return (
    <section className="mt-8 grid grid-cols-2 gap-8 w-4/6">
      {support.map((contact) => (
        <div className="flex gap-4 p-3 border-2 items-center border-custom-grey-30 rounded-2xl">
        <img src={contact.icon} alt="" />
        <div className="flex flex-col gap-3">
          <h6 className="font-semibold text-base text-custom-grey-60">{contact.title}</h6>
          <div className="flex items-center gap-3">
            <p className="font-semibold text-base text-custom-primary-blue cursor-pointer">{contact.cta}</p>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8333 6.125L15 10.5M15 10.5L10.8333 14.875M15 10.5L5 10.5"
                stroke="#4169E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      ))}
    </section>
  );
};
