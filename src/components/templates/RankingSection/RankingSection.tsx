import React, { useState, useEffect } from 'react';
import { ArticleWrapper, ContentWrapper, RankingSectionHeader, TitleWrapper, Wrapper } from './RankingSection.styles';
import { Button } from 'components/atoms/Button/Button';

export const RankingSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  return (
    <Wrapper>
      <RankingSectionHeader>Ranking</RankingSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
            </ContentWrapper>
            <Button isBig> Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <RankingSectionHeader>{error ? error : 'Loading...'}</RankingSectionHeader>
      )}
    </Wrapper>
  );
};

export default RankingSection;
