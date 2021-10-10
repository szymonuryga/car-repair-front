import React from 'react';
import { Wrapper, TitleWrapper, ContentWrapper } from './RankingWrapper.styles';

type Props = {
  title: string;
  firstItem?: string;
  secondItem?: string;
  image?: string;
};

const RankingWrapper: React.FC<Props> = ({ title, firstItem, secondItem, image }): JSX.Element => {
  return (
    <Wrapper>
      <TitleWrapper>
        <h3>{title}</h3>
      </TitleWrapper>
      <ContentWrapper>
        {firstItem || secondItem ? (
          <p>
            {firstItem} {secondItem}
          </p>
        ) : null}
        {image ? <img src={image} alt="logo" /> : null}
      </ContentWrapper>
    </Wrapper>
  );
};

export default RankingWrapper;
