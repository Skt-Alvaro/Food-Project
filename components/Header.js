import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { icons, SIZES, COLORS, FONTS } from "../constants";
import { initialCurrentLocation } from "../helpers/marketItems";

const Header = () => {
    return (
        <Container>
            <Button>
                <ImageIcon source={icons.nearby} resizeMode="contain" />
            </Button>

            <SecondItemContainer>
                <SecondItemView>
                    <Text style={{ ...FONTS.h3 }}>
                        {initialCurrentLocation.streetName}
                    </Text>
                </SecondItemView>
            </SecondItemContainer>

            <ThirdButton>
                <ImageIcon source={icons.basket} resizeMode="contain" />
            </ThirdButton>
        </Container>
    );
};

export default Header;

const Container = styled.View`
    flex-direction: row;
    height: 50px;
    margin-top: 50px;
`;

const Button = styled.TouchableOpacity`
    width: 50px;
    padding-left: ${SIZES.padding * 2}px;
    justify-content: center;
`;

const ImageIcon = styled.Image`
    width: 30px;
    height: 30px;
`;

const SecondItemContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const SecondItemView = styled.View`
    width: 70%;
    height: 100%;
    background-color: ${COLORS.lightGray3};
    align-items: center;
    justify-content: center;
    border-radius: ${SIZES.radius}px;
`;

const ThirdButton = styled.TouchableOpacity`
    width: 50px;
    padding-right: ${SIZES.padding * 2}px;
    justify-content: center;
`;
