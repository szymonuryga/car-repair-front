import { Logo, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Car-Repair
          <br />
          Shop
        </h1>
      </Logo>
      <StyledLink to="/repairs">Dashboard</StyledLink>
      <StyledLink to="/mechanics">Mechanics</StyledLink>
      <StyledLink to="/cars">Cars</StyledLink>
      <StyledLink to="/clients">Clients</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
