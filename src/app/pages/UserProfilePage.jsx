import { UploadImage } from "../../components/UserProfile/UploadImage";
import { UserDetails } from "../../components/UserProfile/UserDetailds";
import { ChangePassword } from "../../components/UserProfile/ChangePassword";

export const UserProfilePage = () => {
  return (
    <section className="">
      <div className="mt-8 flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-5 w-full lg:w-2/5">
            <UploadImage />
            <UserDetails />
        </div>
        <ChangePassword />
      </div>
    </section>
  );
};
