import './Banner.css'
import PlayStore from '../button/PlayStore';
import AppleStore from '../button/AppleStore';
import MockUp from '../../img/mockup.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-left' >
                <h4 className='banner-text'>Kamu laper atau haus?</h4>
                <h1 className='banner-heading'>Tenang... ada Hangry! yang siap mengatasi</h1>
                <Link to='https://play.google.com/store/apps/details?id=com.modular.ishangry&pli=1' target='_blank' rel='noopener noreferrer'>
                    <PlayStore />
                </Link>
                <Link to="https://apps.apple.com/us/app/hangry/id1498223490" target='_blank' target='_blank' rel='noopener noreferrer'> 
                    <AppleStore />
                </Link>
            </div>
            <div className='banner-right'>
                <img className='mockUp' src={MockUp}></img>
            </div>
        </div>
    );
}

export default Banner;