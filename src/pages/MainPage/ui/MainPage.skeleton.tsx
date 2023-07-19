import Skeleton from 'react-loading-skeleton';
import { Separator } from 'widgets/Separator';
import 'react-loading-skeleton/dist/skeleton.css';

const MainPageSkeleton = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton height={35} width={300} style={{ marginBottom: '4px' }} />
        <Skeleton height={35} width={300} />
        <Separator />
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <Skeleton width={77} height={40} />
            <Skeleton width={146} height={40} />
        </div>
    </div>
);

export default MainPageSkeleton;
