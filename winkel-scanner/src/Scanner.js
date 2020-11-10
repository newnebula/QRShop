import QrReader from 'react-qr-reader';
import CSS from './Scanner.module.css'
import { withRouter } from "react-router-dom";
import React, {useState} from 'react'

const Scanner = props => {

  const QRmessageStart = (<div className={CSS.Text}>Laat je QR code scannen.</div>)
  const QRmessageError = (<div className={CSS.ErrorMessage}>Verkeerde QR code. Ben je bij de juiste winkel?</div>)

  const [scannerCaption, setScannerCaption]=useState(QRmessageStart);
  const theShopName = props.match.params.shopName

  const handleScan = data => {
    if(data){
        if (data === theShopName) {
            console.log("the url", "/promos/" + theShopName )
            props.history.push("/promos/" + theShopName);
        }else{
          setScannerCaption(QRmessageError)
        }
    }else{
      setScannerCaption(QRmessageStart)
    }
  }

  const handleError = err => {
    setScannerCaption(<p>Internal error, no promos today.</p>)
  }

  return (
    <div className={CSS.OuterDiv}>
      <div className={CSS.Message}>Welkom bij {theShopName}</div>
      <div className={CSS.Scanner}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{width:'100%'}}
        />
        {scannerCaption}
      </div>
    </div>
  )
}

export default withRouter(Scanner);