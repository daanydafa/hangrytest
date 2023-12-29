import './OrderNow.css'
import Img from '../../img/img4.png'
import IconCheck from '../../img/IconCheck';
import { Link } from 'react-router-dom';

const Order = () => {
    return(
        <div className='order'>
            <div className='order-left' >
                <h1 className='order-heading'>Makin rame, makin hemat!</h1>
                <h3 className='order-text'>Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja. Cocok untuk hidangan segala acara!</h3>
                <div className='listed'>
                    <IconCheck />
                    <h3 className='order-list'>Beragam pilihan menu</h3>
                </div>
                <div className='listed'>
                    <IconCheck />
                    <h3 className='order-list'>Semua menu diskon 20%</h3>
                </div>
                <div className='listed'>
                    <IconCheck />
                    <h3 className='order-list'>Gratis biaya kirim </h3>
                </div>
                <h4 className='order-subtext'>*Syarat & ketentuan berlaku</h4>
                <Link to='https://api.whatsapp.com/send?phone=6281113011541' target='_blank' rel='noopener noreferrer'>
                    <button type='button' >Pesan Sekarang</button>
                </Link>
            </div>
            <div className='order-right'>
                <img className='pic' src={Img}></img>
            </div>
        </div>
    );
}

export default Order