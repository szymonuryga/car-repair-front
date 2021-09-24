import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
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
