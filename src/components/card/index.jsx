/* eslint-disable react/prop-types */
import { useContext, createContext } from 'react';

import {
  Container,
  Group,
  Title,
  Text,
  Feature,
  FeatureClose,
  FeatureImage,
  FeatureText,
  FeatureContent,
  FeatureDescription,
  FeatureTitle,
  FeatureAdditionalInfos,
  Item,
  Image,
  Overlay,
} from './styles/card';

const FeatureContext = createContext();

export default function Card({
  children,
  selectedItemId,
  setSelectedItemId,
  ...restProps
}) {
  return (
    <FeatureContext.Provider value={{ selectedItemId, setSelectedItemId }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Item = function CardItem({ children, item, ...restProps }) {
  const { setSelectedItemId } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setSelectedItemId(item.id);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

// eslint-disable-next-line no-unused-vars
Card.Feature = function CardFeature({ children, item, src, ...restProps }) {
  const { selectedItemId, setSelectedItemId } = useContext(FeatureContext);
  // console.log(selectedItemId ? (item.id === selectedItemId ? item : "" ) : "" )
  return selectedItemId === item.id ? (
    <Overlay onClick={() => setSelectedItemId(null)}>
      <Feature onClick={(e) => e.stopPropagation()} {...restProps}>
        <FeatureImage>
          <img src={src} alt={`${item.title ? item.title : item.name} cover image`} />
          <FeatureClose onClick={() => setSelectedItemId(null)}>
            <img src="/images/icons/close.png" alt="Close button" />
          </FeatureClose>
        </FeatureImage>
        <FeatureContent>
          <FeatureDescription>
            <FeatureTitle>{item.title ? item.title : item.name}</FeatureTitle>
            <FeatureText>{item.overview ? item.overview : ''}</FeatureText>
          </FeatureDescription>
          <FeatureAdditionalInfos>
            <FeatureText>
              <span>Sortie : </span>
              {item.release_date ? item.release_date : item.first_air_date}
            </FeatureText>
            <FeatureText>
              <span>Note Moyenne : </span>
              {item.vote_average.toFixed(2)}
            </FeatureText>
            {/* <FeatureText>
              <span>Genres :</span>
            </FeatureText> */}
          </FeatureAdditionalInfos>
        </FeatureContent>
      </Feature>
    </Overlay>
  ) : null;
};
