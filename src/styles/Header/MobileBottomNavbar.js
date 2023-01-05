import styled from "styled-components";

const MobileBottomNavbar = styled.nav`
  background-color: ${({ theme }) => theme.bottomNav};
  display: none;
  min-width: 100%;
  height: 80px;
  position: sticky;
  bottom: 0;

  & .link-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & .inner-link-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 2.5rem;

      & p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 430px) {
    display: flex;
  }
`;

export default MobileBottomNavbar;
