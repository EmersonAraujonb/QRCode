import { useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

function App() {
  const [link, setLink] = useState('');
  const [qrCodeLink, setQrCodeLink] = useState();

  function handleGenerate(link_url: string) {
    QRCodeLink.toDataURL(link_url, {
      width: 300,
      margin: 3
    }, function(err:any, url: any){
      setQrCodeLink(url);
    })
  }
  function handleQRCode(e: any) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }
  return (
    <>
      <div className='container'>
        <QRCode value={link} />
        <input className='input' value={link} onChange={(e) => handleQRCode(e)} type="text" placeholder='Digite seu link...' />
        <button className='btnDownload' disabled={!qrCodeLink}><a href={qrCodeLink} download={`QRCode.png`}>Baixar QRCode</a></button>
      </div>
    </>
  )
}

export default App
