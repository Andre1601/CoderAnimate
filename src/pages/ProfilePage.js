import HeaderLogin from "../components/HeaderLogin";
import ProfileBody from "../components/ProfileBody";
import FooterPage from "../components/FooterPage";
import HeaderNotLogin from "../components/HeaderNotLogin";

function ProfilePage({ authedUser, logout }) {
  if (authedUser === null) {
    return (
      <>

        <div className="md:h-screen">
          <HeaderNotLogin/>
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
      <div className="h-full sm:h-[100vh]">
        <HeaderLogin logout={logout} />
        <div className="w-full">
          <ProfileBody />
        </div>
      </div>
      <FooterPage />
    </>
  );
}
export default ProfilePage;
