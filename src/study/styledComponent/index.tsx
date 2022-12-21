import React from 'react';
import styled from '@emotion/styled';

const StyledRootDiv = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    text-align: center;
`

const StyledDiv = styled.div<{ color: string, back?: string}>`
    margin: auto;
    padding: 10px;
    font-weight: 700;
    background-color: ${(props) => props.back ? props.back : '#ffffff'};
    color: ${(props) => props.color ? props.color : 'black'};
`

const StyledInput = styled.input<{ color: string }>`
    color: ${(props) => props.color ? props.color : 'black'};
    width: 150px;
    margin: auto;
`

const StyledComp = () => {
    return (
        <StyledRootDiv>
            <StyledDiv color='green'>
                <StyledInput color='blue'defaultValue={123} />
                <br />
                <StyledInput color='red' defaultValue={456} />
            </StyledDiv>
        </StyledRootDiv>
    );
};

export default StyledComp;