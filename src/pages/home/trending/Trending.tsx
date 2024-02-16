import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

const Trending = () => {
  const onTabChange = (tab:any) => {};
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">This is Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
