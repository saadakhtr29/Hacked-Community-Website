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
          <ul>
            <li>Be Respectful: Treat all community members with respect, kindness, and empathy</li>
            <li>Be Inclusive: Welcome developers from all backgrounds, skill levels, and experiences</li>
            <li>Be Collaborative: Share knowledge freely and help others learn and grow</li>
            <li>Be Professional: Maintain professional communication in all interactions</li>
            <li>Be Constructive: Provide helpful feedback and engage in meaningful discussions</li>
            <li>Be Patient: Remember that everyone is learning and growing at their own pace</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityGuidelines;
