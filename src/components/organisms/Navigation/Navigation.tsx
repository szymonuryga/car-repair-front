import { useClients } from 'hooks/useClients';
import { Logo, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  const { getAllClients } = useClients();

  console.log(getAllClients());
  return (
    <Wrapper>
      <Logo>
        <h1>
          Car-Repair
          <br />
          Shop
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/group">Mechanics</StyledLink>
      <StyledLink to="/group">Cars</StyledLink>
      <StyledLink to="/group">Clients</StyledLink>
      <StyledLink to="/group">Statistic</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
