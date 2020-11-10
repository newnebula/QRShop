import React, {useState} from 'react';
import QRCode from 'qrcode.react';
import CSS from './ModeShopping.module.css';

const ModeShopping = props =>{

  //Substitute data
  const QrCodes = [
    {shop:'het Hapje', qrc:"het-hapje"},
    {shop:'Slager Janssens', qrc:"slager-janssens"},
    {shop:'Zig-Zag', qrc:"zig-zag"}]


  //When a promo-tile is clicked, switch the view to the QR of this promo.
  //When this QR is clicked switch back to view all promos.
  let viewOnlyQR = (_qrCode) => {
    setView(
      <div className={CSS.BigCode} onClick={()=>setView(viewOfAll)}>
        <QRCode fgColor="#000000" size={200} value={_qrCode}/>
      </div>
    )
  }

  const viewOfAll=(
    QrCodes.map(code=>

    <div  className={CSS.APromo}
          onClick={()=>viewOnlyQR(code.qrc)}>
        <div className={CSS.ShopName}>{code.shop}</div>
        <QRCode fgColor="#376E6F" size={70} value={code.qrc}/>
    </div>)
  )

  const [view, setView]=useState(viewOfAll)

  return (
    <div className="ModeChoice">

        {view}

    </div>
  );
}

export default ModeShopping;
