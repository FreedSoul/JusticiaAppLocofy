import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header
      className="self-stretch bg-lightseagreen h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] z-[2] text-center text-5xl text-gray-white font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"
      id="topHeader"
    >
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <img
            className="relative w-[42px] h-11"
            alt="logo del sitio"
            loading="eager"
            src="/logoBalanza.svg"
          />
          <div className="flex flex-col items-start justify-start">
            <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit">
              Justicia
            </h2>
            <div className="relative text-sm leading-[16px] font-medium text-gray1-100 text-right flex items-end w-[89px]">
              Buenos aires
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px]">
            <div className="relative leading-[22px]">Gestion Digital</div>
            <div className="relative leading-[22px]">Suprema Corte</div>
            <div className="relative leading-[22px]">Jurisprudencia</div>
            <div className="relative leading-[22px] font-semibold">
              Guia Judicial
            </div>
            <div className="relative leading-[22px]">Informacion General</div>
            <div className="relative leading-[22px]">Uso interno</div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[42px] h-[39px] flex flex-row items-center justify-center">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
