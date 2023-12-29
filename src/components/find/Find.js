import './Find.css'
import Gofood from '../../img/GoFood.png';
import GrabFood from '../../img/GrabFood.png'
import Zomato from '../../img/Zomato.png'
import Eats from '../../img/Eats.png'

const Find = () => {
    return(
        <div className='find'>
            <h4 className='find-heading'>Hangry! dapat kamu temukan di</h4>
            <div className='apps-wrapper'>
                <img className='appslogo'src={Gofood}></img>
                <img className='appslogo'src={GrabFood}></img>
                <img className='appslogo'src={Zomato}></img>
                <img className='appslogo'src={Eats}></img>
            </div>
        </div>
    );
}

export default Find