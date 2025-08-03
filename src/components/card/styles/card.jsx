import styled from 'styled-components';

export const Title = styled.h2`
  color: #e5e5e5;
  margin-left: 56px;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
  box-sizing: border-box;
  flex-direction: column;
  /* min-height: 300px; */
  /* background-color: red; */
  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
  overflow-x: auto;
  scroll-behavior: smooth;

  /* Cacher le scrollbar */
  /* Pour Firefox */
  scrollbar-width: none;

  /* Pour Internet Explorer et Edge */
  -ms-overflow-style: none;

  /* Pour Chrome, Safari et Edge */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -70px;
    }
  }
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: white;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  height: 100%;
  max-width: 305px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Item = styled.div`
  margin-right: 10px;
  aspect-ratio: 4/3;
  cursor: pointer;
  border-radius: 10px;
  width: 212px;
  height: 314px;
  position: relative;
  background: url(${({ $backgroundImage }) => $backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 112px;
    height: 168px;
  }

  @media (max-width: 426px) {
    width: 90px;
    height: 150px;
  }

  @media (max-width: 370px) {
    width: 70px;
    height: 120px;
  }

  /* HOVER EFFECT */
  &:hover {
    transform: scale(1.05);
    animation: rebound 0.6s ease-out;
  }

  @keyframes rebound {
    0% {
      transform: scale(1.05);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

/* FEATURE */

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 180px;
  background-color: #141414;
  border-radius: 10px;
  position: relative;
  animation: scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  transform-origin: center center;
  margin: 20px;
  max-width: 800px;
  width: 80%;

  @keyframes scaleUp {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const FeatureText = styled.p`
  margin-top: 5px;
  font-size: 14px !important;
  color: white;
  margin-bottom: 0;
  user-select: none;
  line-height: normal;

  > span {
    color: #ffffff5b;
  }

  > .note {
    font-weight: bold;
    color: #33eb91;
  }

  > .genres {
    color: #e50914;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const FeatureImage = styled.div`
  padding-bottom: 5px;
  height: auto;
  aspect-ratio: 16/9;
  position: relative;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
    border-radius: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      #141414 0,
      rgba(20, 20, 20, 0.8) 10%,
      transparent
    );
    pointer-events: none;
  }
`;

export const FeatureContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 20px 40px;


  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FeatureTitle = styled(Title)`
  width: 100%;
  margin-left: 0;
  margin-top: 0;
`;

export const FeatureDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 60%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }

`;

export const FeatureAdditionalInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  /* margin-top: 20px; */


  @media (max-width: 768px) {
    width: 100%;
  }

`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

// export const Content = styled.div`
//   margin: 56px;
//   max-width: 500px;
//   line-height: normal;

//   @media (max-width: 1000px) {
//     margin: 30px;
//     max-width: none;
//   }
// `;

// export const Maturity = styled.div`
//   background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
//   border-radius: 15px;
//   width: 20px;
//   padding: 5px;
//   text-align: center;
//   color: white;
//   font-weight: bold;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
//   margin-right: 10px;
//   font-size: 12px;
// `;
