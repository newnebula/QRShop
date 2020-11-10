import PromoTile from '../PromoTile/PromoTile.js';
import CSS from './ModeAtHome.module.css';
import { Link } from 'react-router-dom';

const ModeAtHome = props =>{

  const promosData = [
    {
    shopCode: "slager-janssens",
    shopName: "Slager Janssens",
    thePromo: "-15%",
    condition: "100",
    valid: "20-11-2020",
    pointsStart: "150p",
    pointsEnd: "120p"
  },{
    shopCode: "slager-janssens",
    shopName: "Slager Janssens",
    thePromo: "-5%",
    condition: "10",
    valid: "25-11-2020",
    pointsStart: "150p",
    pointsEnd: "140p"
  },
  {
    shopCode: "het-hapje",
    shopName: "het Hapje",
    thePromo: "-5%",
    condition: "15",
    valid: "20-11-2020",
    pointsStart: "15p",
    pointsEnd: "12p"
  },{
    shopCode: "het-hapje",
    shopName: "het Hapje",
    thePromo: "Gratis coffe!",
    condition: "10",
    valid: "30-12-2020",
    pointsStart: "15p",
    pointsEnd: "14p"
  },
  {
    shopCode: "zig-zag",
    shopName: "Zig Zag",
    thePromo: "-20%",
    condition: "50",
    valid: "20-11-2020",
    pointsStart: "27p",
    pointsEnd: "17p"
  },{
    shopCode: "zig-zag",
    shopName: "Zig Zag",
    thePromo: "-5%",
    condition: "50",
    valid: "25-11-2020",
    pointsStart: "27p",
    pointsEnd: "22p"
  }
]

  let promosTilesList =(
    promosData.map(aPromo =>
    <Link className={CSS.Link} to={"/shopping"}>
      <PromoTile
      shopName={aPromo.shopName}
      thePromo={aPromo.thePromo}
      condition={aPromo.condition}
      valid={aPromo.valid}
      pointsStart={aPromo.pointsStart}
      pointsEnd={aPromo.pointsEnd}
      />
    </Link>)
  )

  return (
    <div className={CSS.AllPromos}>
      {promosTilesList}
    </div>
  );
}

export default ModeAtHome;
