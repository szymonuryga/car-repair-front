import styled from 'styled-components';

interface ActiveProps {
  isActive?: boolean;
}

interface DisabledProps {
  isDisabled?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Item = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PaginationItem = styled.button<ActiveProps>`
  background: #fff;
  border: ${({ isActive }) => (isActive ? '2px solid #666' : '1px solid #888')};
  color: ${({ isActive }) => (isActive ? '#888' : '')};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  position: relative;
  margin: 0 5px;
  cursor: pointer;
  pointer-events: ${({ isActive }) => (isActive ? 'none' : '')};
`;

export const ButtonNavigation = styled.button<DisabledProps>`
  background: #fff;
  border: none;
  padding: 10px;
  color: ${({ isDisabled }) => (isDisabled ? '#888' : '#666')};
  box-shadow: ${({ isDisabled }) => (isDisabled ? 'none' : '0 0 3px rgba(0, 0, 0, 0.4)')};
  margin: 0 10px;
  cursor: pointer;
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : '')};
`;
