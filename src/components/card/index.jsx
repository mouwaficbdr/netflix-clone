/* eslint-disable react/prop-types */
import { useContext, createContext } from 'react';

import {
  Container,
  Group,
  Title,
  Text,
  Feature,
  FeatureImage,
  FeatureText,
  FeatureContent,
  FeatureDescription,
  FeatureTitle,
  FeatureAdditionalInfos,
  Item,
  Image,
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
  const { selectedItemId } = useContext(FeatureContext);
  return selectedItemId === item.id ? (
    <Feature {...restProps}>
      <FeatureImage src={src} />
      <FeatureContent>
        <FeatureDescription>
          <FeatureTitle>{item.title ? item.title : item.name}</FeatureTitle>
          <FeatureText>{item.overview ? item.overview : ''}</FeatureText>
        </FeatureDescription>
        <FeatureAdditionalInfos>
          <FeatureText>
            <span>Sortie :</span>
            {item.release_date ? item.release_date : item.first_air_date}
          </FeatureText>
          <FeatureText>
            <span>Note Moyenne :</span>
            {item.vote_average}
          </FeatureText>
          {/* <FeatureText>
            <span>Genres :</span>
          </FeatureText> */}
        </FeatureAdditionalInfos>
      </FeatureContent>
    </Feature>
  ) : null;
};
