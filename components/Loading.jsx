import LoadingGIF from '@assets/icons/loading.gif';
import Image from 'next/image';

const Loading = () => {

    return (

        <div className='loading' style={{
            width: '100%', height: 'calc(100vh - var(--headerHeight))', display: 'flex',
            justifyContent: 'center', alignItems: 'center'
        }}>

            <Image src={LoadingGIF} width={72} height={72}/>
        
        </div>

    )
};

export default Loading;
