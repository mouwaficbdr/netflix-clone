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
      margin-top: -150px;
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
  cursor: pointer;
  border-radius: 10px;
  width: 212px;
  height: 314px;
  position: relative;
  background: url(${({ backgroundImage }) => backgroundImage});
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

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 80vw;
  max-height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FeatureText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: white;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;

  > span{
    color: #ffffff5b;
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 00px;
`;

export const FeatureContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeatureTitle = styled(Title)`
  width: 100%;
`;

export const FeatureDescription = styled.div`
`;

export const FeatureAdditionalInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
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
