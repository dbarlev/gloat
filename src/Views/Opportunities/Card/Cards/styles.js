import styled from 'styled-components';
import { COLORS } from '../../../../Shared/colors';

export const Container = styled.div`
    height: 100%;
    border-radius: 5px;
`

export const StyledCardHeading = styled.div`
    display: flex;
`

export const Title = styled.h2`
    color: black;
    font-size: 15px;
`

export const SubTitle = styled.div`
    color: #b1afaf;
    font-size: 12px;
    font-weight: 500;
`

export const Location = styled.div`
    color: #b1afaf;
    font-size: 12px;
    font-weight: 500;
`

export const CoverImage = styled.img`
    width: 100%;
    height: 145px;
    border-radius: 5px;
`

export const StyledCardFooter = styled.div`
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: ${props => props.isWishlist ? 'flex-start' : 'flex-end'};
`

export const MoreDetails = styled.div`
    font-size: 13px;
    font-weight: 500;
    text-decoration: underline;
    flex: 1;
    cursor: pointer;
`

export const PersonContainer = styled.div`
    border: 1px solid #f0f0f0;
    width: 100%;
    height: 145px;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const PendingStyle = styled.div`
    padding-left: 15px;
    padding-top: 5px;
    background: ${COLORS.BLACK};
    color: white;
    height: 30px;
    border-radius: 5px 5px 0 0; 
`