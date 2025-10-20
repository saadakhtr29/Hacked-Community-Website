import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import "../style/communityGuidelinesPage.css";

const CommunityGuidelines = () => {
  return (
    <div className="guideline-wrapper">
      <Navbar />
      <div className="guideline-body">
        <div className="content-wrapper">
          <h2 className="guideline-heading">Community Guidelines</h2>
          <ul className="guildeline-points">
            <li><i><b><u>Be Respectful:</u></b></i> Treat all community members with respect, kindness, and empathy.</li>
            <li><i><b><u>Be Inclusive:</u></b></i> Welcome developers from all backgrounds, skill levels, and experiences.</li>
            <li><i><b><u>Be Collaborative:</u></b></i> Share knowledge freely and help others learn and grow.</li>
            <li><i><b><u>Be Professional:</u></b></i> Maintain professional communication in all interactions.</li>
            <li><i><b><u>Be Constructive:</u></b></i> Provide helpful feedback and engage in meaningful discussions.</li>
            <li><i><b><u>Be Patient:</u></b></i> Remember that everyone is learning and growing at their own pace.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityGuidelines;
