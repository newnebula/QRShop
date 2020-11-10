import CSS from './PromoTile.module.css';

const PromoTile = props =>{

  return (
    <div className={CSS.PromoTile}>
        <div className={CSS.ShopName}> {props.shopName}</div>
        <div className={CSS.ThePromo}> {props.thePromo}</div>
        <div className={CSS.Button}> Gebruik deze promo </div>
        <div className={CSS.Condition}> Bij aankoop vanaf &euro;
        {props.condition}</div>
        <div className={CSS.Condition}> Geldig t/m {props.valid}</div>
        <div className={CSS.Points}> {props.pointsStart} <span>&#8680;</span> {props.pointsEnd}</div>
    </div>
  );
}

export default PromoTile;
