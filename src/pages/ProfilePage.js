import HeaderLogin from "../components/HeaderLogin";
import ProfileBody from "../components/ProfileBody";
import FooterPage from "../components/FooterPage";

function ProfilePage() {
    return (
      <>
        <div className="md:h-screen">
          <HeaderLogin/>
          <div className="w-full">
            <ProfileBody/>
          </div>
        </div>
          <FooterPage/>
      </>
    )
}
export default ProfilePage;