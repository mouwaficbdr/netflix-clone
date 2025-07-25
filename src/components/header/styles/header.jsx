import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(0deg, #141414 0, rgba(20, 20, 20, 0.8) 10%, transparent),
    ${({ src }) =>
      src
        ? `url(${src}) top left / cover no-repeat`
        : `url('/images/misc/home-bg.jpg') top left / cover no-repeat`};
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    min-height: 80vh;
  }

  /* @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
    dontShowOnSmallViewPort && "background: none"};
  } */
`;

export const Container = styled.div`
  display: flex;
  margin: 0 50px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Link = styled.p`
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active ? "700" : "normal")};
  color: ${({ active }) => (active ? "#e50914" : "#fff")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  animation: ${({ animate }) =>
    animate ? `halo 2s ease-in-out infinite` : ``};
  animation-delay: 3s;

  &:hover {
    background: #f40612;
    animation: none;
    box-shadow: 0 0 20px rgba(229, 9, 20, 0.8);
  }

  @keyframes halo {
    0% {
      box-shadow:
        0 0 15px rgba(229, 9, 20, 0.6),
        0 0 30px rgba(229, 9, 20, 0.3);
    }
    50% {
      box-shadow:
        0 0 40px rgba(229, 9, 20, 1),
        0 0 60px rgba(229, 9, 20, 0.8),
        0 0 80px rgba(229, 9, 20, 0.5);
    }
    100% {
      box-shadow:
        0 0 15px rgba(229, 9, 20, 0.6),
        0 0 30px rgba(229, 9, 20, 0.3);
    }
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1440px) {
    height: 45px;
    width: 167px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 768px) {
    padding: 0;
    width: unset;
  }

  @media (max-width: 600px) {
    padding: 100px 0;
    width: unset;
    margin-top: 50px;
  }

  @media (max-width: 900px) {
    padding: 50px 0;
    width: unset;
  }

  /* @media (max-width: 1100px) {
    display: none;
  } */
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw - 0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background: #ff1e1e;
    color: white;
  }

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0")};
`;

export const Picture = styled.button`
  background: url(${({ src }) => (src ? src : "/images/users/1.png")});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 30px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
