import CSS from './ModeChoice.module.css'
import { Link } from 'react-router-dom';

const ModeChoice = props =>{

  return (
    <div className="ModeChoice">

      <Link className={CSS.Link} to={"/my-promos"}><div onClick={props.toModeAtHome} className={CSS.ModeChoiceButtonHome} >  Alle promoties </div></Link>

      <Link className={CSS.Link} to={"/shopping"}><div onClick={props.toModeShopping} className={CSS.ModeChoiceButtonShopping} >  Winkels </div></Link>

    </div>
  );
}

export default ModeChoice;
