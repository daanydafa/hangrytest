import './About.css'
import MenuCard from '../menuCard/MenuCard'
import Brand1 from '../../img/brand1.png'
import Brand2 from '../../img/brand2.png'
import Brand3 from '../../img/brand3.png'
import Img1 from '../../img/img1.png'
import Img2 from '../../img/img2.png'
import Img3 from '../../img/img3.png'

const About = () => {
    return (
        <div className="about">
            <h1 className='about-heading'>Hangry! adalah restoran dengan beragam brand</h1>
            <h3 className='about-text'>Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</h3>
            <div className='menu'>
                <MenuCard brand={Brand1} img={Img1} title="Ayam Koplo" text="Ayam Geprek · Indonesia"/>
                <MenuCard brand={Brand2} img={Img2} title="San Gyu" text="Beef Bowl · Jepang"/>
                <MenuCard brand={Brand3} img={Img3} title="Bude Sari" text="Nasi Ayam · Indonesia"/>
            </div>
        </div>
    );
};

export default About;