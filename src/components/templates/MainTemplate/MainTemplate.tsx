import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import RankingSection from 'components/templates/RankingSection/RankingSection';

const MainTemplate = ({ children }: any) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
      <RankingSection />
    </Wrapper>
  );
};

export default MainTemplate;
