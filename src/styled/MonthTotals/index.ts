import styled from 'styled-components';
import { colors, fontSizes } from '../theme';

export const MonthTotalsContainer = styled.div`
  margin: 20px 0;
`;

export const MonthTotalsTitle = styled.h2`
  margin-bottom: 16px;
  color: ${colors.primary};
  text-align: center;
`;

export const TotalList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const TotalsItem = styled.li`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  font-weight: 500;
  font-size: ${fontSizes.large};
  border-radius: 8px;
  padding: 1rem 1.5rem;
  background: ${colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TotalSum = styled.span`
  color: ${colors.blue};
  font-weight: 600;
`;
