import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Link from "next/link";

type CardLinkType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
  serviceDescription?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const CardLink: NextPage<CardLinkType> = ({
  imageDimensions,
  imageDimensionsText,
  serviceDescription,
  propWidth,
  propHeight,
}) => {
  const placeMarkerIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <Link
      className="cursor-pointer [text-decoration:none] flex-1 rounded-md [background:linear-gradient(180deg,_#fff,_#898989_73.75%,_#fff)] h-[426px] flex flex-col p-6 box-border items-center justify-end gap-[10px] min-w-[355px] max-w-[370px] text-left text-base text-black font-body-regular-600"
      href="/"
    >
      <img
        className="relative w-[169px] h-[265px] object-cover"
        alt=""
        src={imageDimensions}
        style={placeMarkerIconStyle}
      />
      <div className="self-stretch h-6 flex flex-row items-end justify-center">
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="relative w-6 h-6" alt="" src={imageDimensionsText} />
          <div className="relative leading-[24px] font-medium">
            {serviceDescription}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardLink;
