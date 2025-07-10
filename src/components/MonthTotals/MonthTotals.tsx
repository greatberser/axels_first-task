import {
  MonthTotalsContainer,
  MonthTotalsTitle,
  TotalList,
  TotalSum,
  TotalsItem,
} from '../../styled/MonthTotals';

type Props = {
  totals: [string, number][];
};

export const MonthTotals: React.FC<Props> = ({ totals }) => {
  return (
    <MonthTotalsContainer>
      <MonthTotalsTitle>Monthly Totals</MonthTotalsTitle>
      <TotalList>
        {totals.map(([month, total]) => (
          <TotalsItem key={month}>
            {month}{' '}
            <TotalSum className="total-sum">{total.toFixed(2)}</TotalSum>
          </TotalsItem>
        ))}
      </TotalList>
    </MonthTotalsContainer>
  );
};

export default MonthTotals;
