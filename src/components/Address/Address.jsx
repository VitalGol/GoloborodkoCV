import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { address } from '../../data';
import './Address.scss';
import myPhoto from '../../assets/photo2021.jpg';
import qrCode from '../../assets/qr-code.png';
import resume from '../../assets/Goloborodko-FEdev.pdf';

const Address = () => {
  const [timer, setTimer] = useState(10);
  const downloadFile = () => {
    // const pdfUrl = '../../assets/Goloborodko-FEdev.pdf';
    // const pdfUrl = '/GoloborodkoCV/assets/Goloborodko-FEdev.pdf';
    const link = document.createElement('a');
    // link.href = pdfUrl;
    link.href = resume;
    link.download = 'Goloborodko-FEdev.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const changeImgToQR = () => {
    const hover = document.querySelector('.hover');
    hover.classList.add('flip');
    let timerId = setInterval(() => setTimer((timer) => timer - 1), 1000);
    setTimeout(() => {
      clearInterval(timerId);
      setTimer(10);
    }, 10000);
    setTimeout(() => {
      hover.classList.remove('flip');
    }, 10000);
  };
  const linkToOut = (id) => {
    switch (id) {
      case 1:
        window.open('tel:+380680564880', 'tel');
        break;
      case 2:
        window.open('mailto:vital.goloborodko@gmail.com', 'mailto');
        break;
      case 3:
        window.open('https://telegram.im/@VitalyGol', 'telegram');
        break;
      case 4:
        window.open(
          'http://linkedin.com/in/vitaly-goloborodko-57b7a761',
          'linkedin.com'
        );
        break;
      case 5:
        downloadFile();
        break;
      case 6:
        changeImgToQR();
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 font-thin bg-gray-600 lg:w-2/6 xl:w-2/6 xs:p-2 ls:p-2 dark:bg-slate-200 text-gray-50 dark:text-color-text-light font-inter dark:font-normal ">
      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: '#689cca',
          color: 'rgb(249, 250, 251)',
          zIndex: 10,
        }}
      />
      <div className="flex content-center justify-center mt-10 mb-10 lg:mb-20 lg:mt-0 ">
        <div className="address">
          {timer === 10 ? (
            <p className="mb-2 text-sm text-center opacity-0">{timer} sec</p>
          ) : (
            <p className="mb-2 text-sm text-center">{timer} sec</p>
          )}
          <div
            className="address-flip"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
              timer === 10
                ? `Click to show QR code for 10 sec`
                : `Scan the QR code during ${timer} sec`
            }
            data-tooltip-delay-hide={500}
          >
            <div className="hover address-card">
              <div className="address-photo" onClick={changeImgToQR}>
                <img
                  src={myPhoto}
                  alt="my photo"
                  className="h-40 rounded-full "
                />
              </div>
              <div className="address-code">
                <img src={qrCode} alt="my qr-code" className="h-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="link">
        <ul>
          {address.map((element) => {
            const icon = <element.icon />;
            return (
              <li
                key={element.id}
                className="flex flex-row items-center justify-start mb-4"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={element.tooltip}
                data-tooltip-delay-hide={500}
                onClick={() => linkToOut(element.id)}
              >
                <div className="flex flex-row items-center justify-start">
                  {icon}
                  <p className="ml-3">{element.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Address;
