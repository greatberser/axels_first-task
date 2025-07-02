import styled from 'styled-components';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { colors, fontSizes } from '../theme';

export const EmptyMess = styled.h4`
  text-align: center;
  font-weight: normal;
  font-size: ${fontSizes.large};
  margin-top: 2rem;
`;

export const StyledItem = styled(ListItem)`
  && {
    background-color: ${colors.backgroundItem};
    margin: 0.5rem 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: ${colors.hover};
    }
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Category = styled(ListItemText)`
  && {
    font-weight: bold;
    color: #333;
    font-size: ${fontSizes.medium};
  }
`;

export const DateText = styled(Typography)`
  && {
    font-size: ${fontSizes.small};
    color: #666;
    margin-right: 1rem;
  }
`;

export const AmountText = styled.span`
  font-weight: bold;
  color: ${colors.success};
  font-size: ${fontSizes.large};
  margin-left: auto;
  padding: 0.5rem 1rem;
`;
