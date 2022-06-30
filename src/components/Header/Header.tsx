import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1 className='text-red-500'>Header</h1>
    </StyledHeader>
  );
};

export default Header;
