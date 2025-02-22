import Breadcrumb from "../Components/Pages/Breadcrumb";
import NotfoundPage from "../Components/Pages/FAQ/NotfoundPage";

const Page = () => {
  return (
    <div className="pt-20">
      <Breadcrumb heading={"404"} bread={"404"} />
      <NotfoundPage />
    </div>
  );
};

export default Page;
