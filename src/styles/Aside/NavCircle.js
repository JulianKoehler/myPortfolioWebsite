import styled from "styled-components";

const NavCircle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 1.6rem 0;
  background-color: ${({ active, theme }) => (active ? theme.navAsideActive : theme.navAsideInactive)};
`;

export default NavCircle;
