import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import Header from "../components/header";

const NoticiasGridView: NextPage = () => {
  return (
    <div className="relative bg-lightseagreen w-full flex flex-col items-start justify-start">
      <Header />
      <section className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url('/hero-noticias@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <h1 className="m-0 relative text-inherit leading-[72px] font-semibold font-inherit">
            Noticias
          </h1>
          <div className="relative text-base leading-[24px] font-body-regular-600 text-gray-50">
            Home / Juzgados
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col pt-5 px-0 pb-2 items-center justify-start gap-[20px] text-left text-base text-gray-white font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-6 h-6"
                loading="lazy"
                alt=""
                src="/listbullets.svg"
              />
              <img className="relative w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {(
                    [
                      { value: "Popular properties" },
                      { value: "Latest properties" },
                      { value: "Recommended properties" },
                    ] as any
                  ).map((option: any, index: number) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="self-stretch h-[1782px] flex flex-row flex-wrap items-start justify-center">
          <form className="flex-1 flex flex-col pt-[42px] px-0 pb-[86px] items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
              <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
                <h1 className="m-0 self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-gray-white text-center">
                  Todas las noticias
                </h1>
                <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-gray-white text-center">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Proin sodales ultrices nulla
                  blandit volutpat.
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    id="1"
                    alt=""
                    src="/noticia1Image@2x.png"
                  />
                  <div className="self-stretch h-[156px] flex flex-row p-2.5 box-border items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[34.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                      Nuevo Centro de Acceso a la Justicia en San Luis
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    id="2"
                    alt=""
                    src="/noticia2Image@2x.png"
                  />
                  <div className="self-stretch h-[157px] flex flex-row p-2.5 box-border items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[30.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                      Soria participó de la inauguración del nuevo edificio del
                      Ministerio Público de la Defensa
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt="imagen de noticia"
                    id="3"
                    src="/noticia3Image@2x.png"
                  />
                  <div className="self-stretch h-[158px] flex flex-row p-2.5 box-border items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[30.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                      El Ministerio de Justicia y Derechos Humanos y la SENAF
                      lanzan Campaña Nacional de Adopción
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt="imagen de noticia"
                    id="4"
                    src="/noticia4Image@2x.png"
                  />
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[27.82px] font-medium font-body-regular-600 text-gray-700 text-left">
                      Finalizó la centralización de la documentación vinculada a
                      la causa AMIA en las instalaciones del Palacio Barolo
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="/noticia5Image@2x.png"
                  />
                  <div className="self-stretch h-[156px] flex flex-row p-2.5 box-border items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[34.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                      Nuevo Centro de Acceso a la Justicia en San Luis
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs bg-gray-white box-border w-[400px] h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="/noticia-image@2x.png"
                  />
                  <div className="self-stretch h-[158px] flex flex-row p-2.5 box-border items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[30.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                      El Ministerio de Justicia y Derechos Humanos y la SENAF
                      lanzan Campaña Nacional de Adopción
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="/noticia-image1@2x.png"
                  />
                  <div className="self-stretch h-[157px] flex flex-row p-2.5 box-border items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[30.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                      Soria participó de la inauguración del nuevo edificio del
                      Ministerio Público de la Defensa
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="/noticia-image2@2x.png"
                  />
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[27.82px] font-medium font-body-regular-600 text-gray-700 text-left">
                      Finalizó la centralización de la documentación vinculada a
                      la causa AMIA en las instalaciones del Palacio Barolo
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="/noticia2Image1@2x.png"
                  />
                  <div className="self-stretch h-[156px] flex flex-row p-2.5 box-border items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[34.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                      Nuevo Centro de Acceso a la Justicia en San Luis
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="/noticia2Image2@2x.png"
                  />
                  <div className="self-stretch h-[157px] flex flex-row p-2.5 box-border items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[30.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                      Soria participó de la inauguración del nuevo edificio del
                      Ministerio Público de la Defensa
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs bg-gray-white box-border w-[400px] h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="/noticia3Image1@2x.png"
                  />
                  <div className="self-stretch h-[158px] flex flex-row p-2.5 box-border items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[30.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                      El Ministerio de Justicia y Derechos Humanos y la SENAF
                      lanzan Campaña Nacional de Adopción
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-200 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="/noticia4Image1@2x.png"
                  />
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <h3 className="m-0 flex-1 relative text-5xl leading-[27.82px] font-medium font-body-regular-600 text-gray-700 text-left">
                      Finalizó la centralización de la documentación vinculada a
                      la causa AMIA en las instalaciones del Palacio Barolo
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                    <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-black text-left">
                      12 de Semptiembre
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-row items-end justify-center gap-[8px]">
          <button className="cursor-pointer [border:none] p-2.5 bg-primary-50 rounded flex flex-row items-start justify-start">
            <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-black rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-gray-white text-center flex items-end justify-center w-[26px]">
              1
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              2
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              3
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              ...
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              54
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-2.5 bg-black rounded flex flex-row items-start justify-start">
            <img
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/arrowright@2x.png"
            />
          </button>
        </div>
      </section>
      <section className="self-stretch flex flex-row p-[50px] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
        <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-white font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
          <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center font-body-regular-600">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <img
                  className="relative w-[42px] h-11"
                  alt="logo footer"
                  src="/logoFooter.svg"
                />
                <div className="flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit">
                    Justicia
                  </h3>
                  <div className="relative text-sm leading-[16px] font-medium text-gray1-100 text-right flex items-end w-[89px]">
                    Buenos aires
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base font-body-regular-400">
              <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit">
                Contáctanos
              </h3>
              <div className="relative leading-[24px]">
                whatsapp : +123 400 123
              </div>
              <div className="relative leading-[24px] flex items-end w-[312px]">
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </div>
              <div className="relative leading-[24px]">
                Email: example@mail.com
              </div>
            </div>
            <div className="w-[304px] flex flex-row items-center justify-between">
              <a
                className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center"
                href="https://www.facebook.com/"
              >
                <img
                  className="relative w-5 h-[21.67px]"
                  alt="facebook Icon"
                  src="/facebookIcon.svg"
                />
              </a>
              <a
                className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center"
                href="https://www.linkedin.com"
              >
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt="linkedin Icon"
                  loading="lazy"
                  src="/linkedinIcon.svg"
                />
              </a>
              <a
                className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center"
                href="https://www.instagram.com/"
              >
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt="instagram Icon"
                  loading="lazy"
                  src="/instagramIcon.svg"
                />
              </a>
            </div>
          </div>
          <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
            <a className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit]">
              Enlaces del Sitio
            </a>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Gestion Digital
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Corte Suprema
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Jurisprudencia
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Guia Juridica
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Uso Interno
              </Link>
            </div>
          </div>
          <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
            <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
              Servicios
            </h3>
            <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base">
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Atencion a Victimas
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Certificado de antecedentes
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Certificado de Propiedad
              </Link>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Acceso a la justicia
              </a>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
            <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
              Politicas
            </h3>
            <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base">
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Politica de privacidad
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Seguridad
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                href="/"
              >
                Security
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default NoticiasGridView;
