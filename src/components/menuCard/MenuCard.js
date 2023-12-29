import './MenuCard.css'
import IconArrow from '../../img/IconArrow'
import EllipseBrand from '../../img/EllipseBrand';

export default function MenuCard(props) {
  return (
    <div className='card'>
        <div className='card-top' style={{ backgroundImage: `url(${props.img})`}}>
          <div className='brand-holder'> 
              <EllipseBrand />
              <img className='card-brand' src={props.brand}></img>
          </div>
        </div>
        <div className='card-bottom'>
          <div className='card-title-wrapper'>
            <h2 className='card-title'>{props.title}</h2>
            <div className='arrow'>
              <IconArrow />
            </div>
          </div>
            <h3 className='card-text'>{props.text}</h3>
        </div>
    </div>
  );
}