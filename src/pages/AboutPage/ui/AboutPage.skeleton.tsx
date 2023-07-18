import Skeleton from 'react-loading-skeleton';
import { Separator } from 'widgets/Separator';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutPageSkeleton = () => (
    <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
        <Skeleton height={37} width={200} />
        <Separator />

        <p>
            <Skeleton count={10} style={{ marginBottom: '2px' }} />
            <br />
            <Skeleton count={12} style={{ marginBottom: '2px' }} />
            <br />
            <Skeleton count={5} style={{ marginBottom: '2px' }} />
        </p>

    </div>
);

export default AboutPageSkeleton;
