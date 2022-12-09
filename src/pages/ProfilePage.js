import HeaderLogin from "../components/HeaderLogin";
import ProfileBody from "../components/ProfileBody";
import FooterPage from "../components/FooterPage";
import HeaderNotLogin from "../components/HeaderNotLogin";

function ProfilePage({ authedUser, logout }) {
  if (authedUser === null) {
    return (
      <>

        <div>
          <HeaderNotLogin/>
            <ProfileBody />
        </div>
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
        {/* <FooterPage/> */}
      </div>
    </>
  );
}
export default ProfilePage;
