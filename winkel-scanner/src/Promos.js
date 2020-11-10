import PromoTile from './PromoTile.js';
import CSS from './Promos.module.css';
import { Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import allPromosData from './DataPromo.js';


const Promos = props =>{

  const theShopName = props.match.params.shopName

  let promosData = allPromosData.filter(p=>(p.shopCode===theShopName));

  let promosTilesList =(

    promosData.map(aPromo => <Link className={CSS.Link} to={"/payment"}><PromoTile
      shopName={aPromo.shopName}
      thePromo={aPromo.thePromo}
      condition={aPromo.condition}
      valid={aPromo.valid}
      pointsStart={aPromo.pointsStart}
      pointsEnd={aPromo.pointsEnd}
      /></Link>)
  )

  return (
    <div className={CSS.AllPromos}>
      {promosTilesList}
    </div>
  );
}
export default withRouter(Promos);
