import Skeleton from 'react-loading-skeleton';
import { Separator } from 'widgets/Separator';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutPageSkeleton = () => (
    <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
        <Skeleton height={37} width={200} />
        <Separator />
        <p>
            <div style={{
                display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '20px', flexWrap: 'wrap',
            }}
            >
                <Skeleton width={333} height={250} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Skeleton width={450} />
                    <Skeleton width={450} />
                    <Skeleton width={450} />
                    <Skeleton width={450} />
                </div>
            </div>
            <Skeleton height={37} width={200} />
            <br />
            <Skeleton count={6} style={{ marginBottom: '2px' }} />
            <br />
            <Skeleton width={100} height={24} />
            <br />
            <Skeleton count={10} style={{ marginBottom: '2px' }} />
            <br />
            <Skeleton width={100} height={24} />
            <br />
            <Skeleton count={5} style={{ marginBottom: '2px' }} />
        </p>

    </div>
);

export default AboutPageSkeleton;
