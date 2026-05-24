import styled from 'styled-components';

export const MainColumn = styled.div`
  height: 100vh;
  height: 100svh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: #f3f3f3;

  font-weight: 100;
  -webkit-font-smoothing: antialiased;

  -webkit-box-shadow: 3px 0px 5px 0px rgba(156, 156, 156, 1),
    -3px 0px 5px 0px rgba(156, 156, 156, 1);
  -moz-box-shadow: 3px 0px 5px 0px rgba(156, 156, 156, 1),
    -3px 0px 5px 0px rgba(156, 156, 156, 1);
  box-shadow: 3px 0px 5px 0px rgba(156, 156, 156, 1),
    -3px 0px 5px 0px rgba(156, 156, 156, 1);

  font-family: 'Oxygen', sans-serif;

  &::-webkit-scrollbar {
    display: none;
  }

  .hero-stage,
  .content-stage {
    width: 100%;
    flex: 0 0 100vh;
    flex-basis: 100svh;
    min-height: 100vh;
    min-height: 100svh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  .hero-stage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 24px;
  }

  .content-stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    height: 100svh;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
  }

  .content-stage::-webkit-scrollbar {
    display: none;
  }

  .section-stage {
    width: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: safe center;
    padding: 24px 0;
  }

  @media only screen and (min-width: 980px) {
    width: 980px;
  }

  @media only screen and (min-width: 600px) and (max-width: 980px) {
    width: 85vw;
  }

  @media only screen and (max-width: 600px) {
    width: 100vw;

    .hero-stage {
      padding: 28px 18px;
    }

    .section-stage {
      padding: 18px 0;
    }
  }

`;
