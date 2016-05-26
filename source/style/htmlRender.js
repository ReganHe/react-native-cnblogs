
import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

const defaultFontSize = 16;

export default HtmlRenderStyle = StyleSheet.create({
	img: {
        width: width - 30,
        height: width - 30,
        resizeMode: Image.resizeMode.contain
    },
    p: {
    	fontSize: defaultFontSize,
        lineHeight: defaultFontSize * 3,
        paddingTop: 0,
        paddingBottom: 0,
        color: 'rgba(0,0,0,0.7)'
    },
    a: {
        color: '#2692db',
        fontSize: defaultFontSize,
        paddingLeft: 4,
        paddingRight: 4,
        marginRight: 10,
        marginLeft: 10
    },
    h1: {
        fontSize: defaultFontSize * 1.6,
        fontWeight: "bold",
        color: 'rgba(0,0,0,0.8)'
    },
    h2: {
        fontSize: defaultFontSize * 1.5,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.85)'
    },
    h3: {
        fontWeight: 'bold',
        fontSize: defaultFontSize * 1.4,
        color: 'rgba(0,0,0,0.8)'
    },
    h4: {
        fontSize: defaultFontSize * 1.3,
        color: 'rgba(0,0,0,0.7)',
        fontWeight: 'bold'
    },
    h5: {
        fontSize: defaultFontSize * 1.2,
        color: 'rgba(0,0,0,0.7)',
        fontWeight: 'bold'
    },
    h6: {
        fontSize: defaultFontSize * 1.1,
        color: 'rgba(0,0,0,0.7)',
        fontWeight: 'bold'
    },
    li: {
        fontSize: defaultFontSize * 0.9,
        color: 'rgba(0,0,0,0.7)'
    },
    strong: {
        fontWeight: 'bold'
    },
    em: {
        fontStyle: 'italic'
    },
    codeScrollView:{
        backgroundColor: '#333',
        flexDirection: 'column',
        marginBottom: 15
    },
    codeWrapper: {
        flexDirection: 'column'
    },
    codeRow: {
        flex: 1,
        flexDirection: 'row',
        height: 25,
        alignItems: 'center'
    },
    lineNumWrapper: {
        width: 55,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    lineNum: {
        width: 55,
        color: 'rgba(255,255,255,0.5)'
    },
    codeLine: {
        color: '#E74C3C',
        fontFamily: 'Courier'
    },
    codeLineWrapper: {
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    }
});