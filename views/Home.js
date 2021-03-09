import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import styled from "styled-components/native";
import Header from "../components/Header";

const Home = (props) => {
    return (
        <Container>
            <Header />
        </Container>
    );
};

export default Home;

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${COLORS.lightGray4};
`;
