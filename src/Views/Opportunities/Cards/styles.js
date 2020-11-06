import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 5px;
`

export const CardHeading = styled.div`
    display: flex;
    margin-bottom: 10px;
`

export const Title = styled.h2`
    color: black;
    font-size: 15px;
    margin-bottom: 10px;
`

export const SubTitle = styled.div`
    color: #b1afaf;
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: 500;
`

export const Location = styled.div`
    color: #b1afaf;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 30px;
`

export const CoverImage = styled.img`
    width: 270px;
    height: 145px;
    border-radius: 5px;
`

export const CardFooter = styled.div`
    font-size: 12px;
    font-weight: 500;
    display: flex;
    margin-top: 10px;
`

export const MoreDetails = styled.div`
   font-size: 13px;
   font-weight: 500;
   text-decoration: underline;
   flex: 1;
   line-height: 40px;
   cursor: pointer;
`