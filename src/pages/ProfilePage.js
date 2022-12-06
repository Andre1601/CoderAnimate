import HeaderLogin from "../components/HeaderLogin";
import ProfileBody from "../components/ProfileBody";
import FooterPage from "../components/FooterPage";
import HeaderNotLogin from "../components/HeaderNotLogin";

function ProfilePage({ authedUser }) {
  if (authedUser === null) {
    return (
      <>

        <div className="md:h-screen">
          <HeaderLogin/>
          <div className="w-full">
            <ProfileBody />
          </div>
        </div>
        <FooterPage />
      </>
    );
  }

  return (
    <>
      <div className=" h-full">
        <HeaderLogin />
        <div className="w-full">
          <ProfileBody />
        </div>
      </div>
      <FooterPage />
    </>
  );
}
export default ProfilePage;
