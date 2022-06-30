import styled from "styled-components";

const StyledHome = styled.div`
  height: calc(100vh - 240px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return <StyledHome>Home</StyledHome>;
};

export default Home;
