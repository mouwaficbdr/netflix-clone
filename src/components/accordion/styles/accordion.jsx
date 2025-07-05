import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
  margin-bottom: 10px;
  max-width: 1200px;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;
export const Item = styled.div`
  color: white;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  &:first-of-type {
    margin-top: 3em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 2px;
  font-size: 26px;
  font-weight: 500;
  background: linear-gradient(135deg, #404040 0%, #303030 100%);
  padding: 1.2em 1.5em;
  user-select: none;
  align-items: center;
  width: 100%;
  border-radius: 8px 8px 0 0;
  border: 1px solid #555;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, #4a4a4a 0%, #383838 100%);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);

    &::before {
      left: 100%;
    }
  }

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 1em 1.2em;
  }
`;

export const Body = styled.div`
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.6;
  background: linear-gradient(135deg, #2a2a2a 0%, #202020 100%);
  padding: 0;
  user-select: none;
  width: 100%;
  color: #e0e0e0;
  border: 1px solid #555;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &.open {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
    padding: 1.5em 1.5em 2em 1.5em;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 1.5;

    &.open {
      padding: 1.2em;
    }
  }
`;
