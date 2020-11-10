# QRShop
A front-end of a loyalty-card application made with React.

An application for shop owners and customers - a digital version of a loyalty card where QR codes are used to communicate between devices.

Flow of the interaction: 

The customer uses “klanten-app” which should be a PWA (but isn’t yet). It’s interface provides a QR code for every shop to which this customer had signed up in the past. 

While shopping the QR code representing the shop is scanned at the counter (Tablet). Based on this code the shop’s application (winkel-scanner) fetches the promotions which are available for this particular customer in this particular shop. 

The customer picks a  promotion  and the payment automatically proceeds.
Additionally “klanten-app” provides an overwiev of all current promotions available to this customer in all of her shops.

the QR scanner: https://github.com/JodusNodus/react-qr-reader

