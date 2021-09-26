import React from 'react';
import { ButtonNavigation, Item, Wrapper, PaginationItem } from './Pagination.styles';

export interface Props {
  currentPage: number;
  pages: number;
  pageLimit: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  changePage: (e: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, pages, pageLimit, goToNextPage, goToPreviousPage, changePage }): JSX.Element => {
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    const array = new Array(pageLimit);
    for (let i = 0; i < array.length; i++) {
      array[i] = start + i + 1;
    }
    return array;
  };

  return (
    <Wrapper>
      <ButtonNavigation onClick={goToPreviousPage} isDisabled={currentPage === 1}>
        prev
      </ButtonNavigation>
      {getPaginationGroup().map((item, index) => (
        <PaginationItem onClick={() => changePage(item)} key={index} isActive={currentPage === item}>
          <Item>{item}</Item>
        </PaginationItem>
      ))}

      <ButtonNavigation onClick={goToNextPage} isDisabled={currentPage === pages}>
        next
      </ButtonNavigation>
    </Wrapper>
  );
};

export default Pagination;
