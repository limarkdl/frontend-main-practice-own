import Button from 'shared/ui/Button/Button';
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
            <h1>
                value =
                {counterValue}
            </h1>
            <Button
                onClick={increment}
            >
                increment
            </Button>
            <Button
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};

export default Counter;
