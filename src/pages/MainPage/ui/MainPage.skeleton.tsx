import Skeleton from 'react-loading-skeleton';
import { Separator } from 'widgets/Separator';
import 'react-loading-skeleton/dist/skeleton.css';

const MainPageSkeleton = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton height={37} width={200} />
        <Separator />

    </div>
);

export default MainPageSkeleton;
