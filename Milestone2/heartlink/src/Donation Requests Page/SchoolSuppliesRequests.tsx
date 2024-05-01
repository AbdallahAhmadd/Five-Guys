import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";
import RequestCard from "../components/Requests Section/RequestCard.tsx";
import Clothingbank from "../assets/Clothingbank.png";
import Orman from "../assets/Orman.png";
import Turin from "../assets/Turin.jpg";
import ResalaLogo from "../assets/Resala.png";

function SchoolSuppliesRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title={"School Supplies Requests"} />
      <div className="requests-conainer">
        <RequestCard
          image={Clothingbank}
          description=" School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Turin}
          description="School Supplies Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Turin}
          description="School Supplies Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Clothingbank}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
      </div>
    </>
  );
}

export default SchoolSuppliesRequests;
