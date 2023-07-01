import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const increment = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div>
            <h3>
                Test Redux counter:
                <br />
                <span style={{ fontWeight: 'bolder' }}>{counterValue}</span>
            </h3>
            <Button
                square
                size={ButtonSize.L}
                theme={ButtonTheme.PRIMARY}
                onClick={decrement}
            >
                -
            </Button>
            &nbsp;
            <Button
                square
                size={ButtonSize.L}
                theme={ButtonTheme.PRIMARY}
                onClick={increment}
            >
                +
            </Button>
        </div>
    );
};

export default Counter;
