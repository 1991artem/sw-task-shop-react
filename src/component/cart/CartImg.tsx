import {useState} from 'react';

interface ICartImg {
  img: string[];
}
export default function CartImg({ img }: ICartImg) {
    const [image, setImage] = useState(0)
    let index = image;
    const imgInc = () => {
        if(index === img.length-1){
            index = 0
        } else {
            index++;
        };
        setImage(index)
    }
    const imgDec = () => {
        if(index === 0){
            index = img.length-1
        } else {
            index--;
        };
        setImage(index)
    }
  return (
    <div className="mini-cart-img">
      <img src={img[index]} alt="img" />
      <div className="img-btn">
        <svg
        onClick={imgDec}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="black" fillOpacity="0.73" />
          <path
            d="M14.25 6.06857L8.625 11.6876L14.25 17.3066"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
        onClick={imgInc}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            transform="matrix(-1 0 0 1 24 0)"
            fill="black"
            fillOpacity="0.73"
          />
          <path
            d="M9.75 6.06857L15.375 11.6876L9.75 17.3066"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
