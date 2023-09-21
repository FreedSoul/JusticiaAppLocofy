import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import FormContainer from "../components/form-container";
import CardLink from "../components/card-link";

const LandingPageJusticiaB: NextPage = () => {
  return (
    <div className="relative bg-lightseagreen w-full flex flex-col items-center justify-start text-center text-21xl text-gray-white font-body-regular-600">
      <header className="bg-darkturquoise w-full h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center mix-blend-normal sticky top-[0] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border sm:mix-blend-normal">
        <header className="flex-1 flex flex-row items-center justify-between text-center text-5xl text-gray-white font-body-regular-600 lg:flex">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img
              className="relative w-[42px] h-11"
              alt="logo Justicia"
              src="/logoJusticia.svg"
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
            <div className="flex flex-row items-start justify-start gap-[30px] sm:hidden">
              <div className="relative leading-[22px]">Gestion Digital</div>
              <div className="relative leading-[22px]">Suprema Corte</div>
              <div className="relative leading-[22px]">Jurisprudencia</div>
              <div className="relative leading-[22px] font-semibold">
                Guia Judicial
              </div>
              <div className="relative leading-[22px]">Informacion General</div>
              <div className="relative leading-[22px]">Uso interno</div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center md:flex sm:flex">
              <button className="cursor-pointer [border:none] p-0 bg-maroon w-[42px] h-[39px] flex flex-row items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                  alt=""
                  src="/notification.svg"
                />
              </button>
            </button>
          </div>
        </header>
      </header>
      <section className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
        <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
            <h2 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit">
              Selecciona un Juzgado
            </h2>
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <button
                className="cursor-pointer [border:none] py-3 px-6 bg-mediumblue rounded overflow-hidden flex flex-row items-start justify-start"
                autoFocus={true}
                disabled={false}
              >
                <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                  Persona Natural
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
                <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-mediumblue text-center">
                  Persona Juridica
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
              <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
                <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-black text-center">
                    Ciudad
                  </div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {(
                          [
                            { value: "Palermo" },
                            { value: "Olivos" },
                            { value: "Villas del Parque" },
                            { value: "Nuñez" },
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
                    <Button onClick={(e) => e.preventDefault()}>
                      {`Selecciona una Ciudad `}
                      <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
                <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-black text-left flex items-end w-[150px]">
                    Tipo de juzgado
                  </div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {(
                          [
                            { value: "Circuito" },
                            { value: "Familia" },
                            { value: "Prosmicuo" },
                            { value: "Ejecución de Penas" },
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
                    <Button onClick={(e) => e.preventDefault()}>
                      {`Selecciona Tipo de juzgado `}
                      <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
                <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-gray1-200 text-left flex items-end w-[150px]">
                    Tipo de servicio
                  </div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {(
                          [
                            { value: "Certificado de Dominio Automotor" },
                            { value: "Certificado de Antecedentes Penales" },
                            { value: "Atención a victimas" },
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
                    <Button onClick={(e) => e.preventDefault()}>
                      {`Selecciona  Tipo de servicio `}
                      <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
                <button className="cursor-pointer [border:none] py-3 px-6 bg-royalblue rounded w-[102px] flex flex-row box-border items-center justify-center hover:bg-dodgerblue sm:hover:bg-mediumslateblue">
                  <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center sm:hover:cursor-pointer">
                    Buscar
                  </a>
                </button>
              </nav>
            </div>
          </form>
        </div>
      </section>
      <div className="self-stretch h-[787px] flex flex-col py-[53px] px-[50px] box-border items-center justify-start gap-[45px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            Nuestros Juzgados
          </h1>
          <div className="self-stretch relative text-xl leading-[28px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                href="/"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start z-[0]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                    Villa Central
                  </h3>
                </div>
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-2@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                href="/"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start z-[0]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                    Jujuy
                  </h3>
                </div>
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                href="/"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start z-[0]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                    Ushuaia
                  </h3>
                </div>
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                href="/"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start z-[0]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                    La Plata
                  </h3>
                </div>
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                href="/"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start z-[0]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                    Buenos Aires
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch bg-gray-white flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-regular-600">
        <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
          <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
            <h2 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
              Tipos de juzgados
            </h2>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px]">
            <FormContainer
              itemImage="/houseIcon.svg"
              categoryName="Ejecución de Penas"
            />
            <FormContainer
              itemImage="/houseKeyIcon.svg"
              categoryName="Circuito"
            />
            <FormContainer
              itemImage="/houseCaseIcon.svg"
              categoryName="Familia"
            />
            <FormContainer
              itemImage="/houseZoomIcon.svg"
              categoryName="Promiscuos"
            />
          </div>
        </div>
      </section>
      <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <h2 className="m-0 self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-gray-white text-center">
              Ultimas Noticias
            </h2>
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-whitesmoke-100 text-center">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
            <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] mix-blend-normal min-w-[355px] max-w-[400px] border-[1px] border-solid border-gray-white hover:bg-gainsboro-100 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt="noticia 1 Image"
                src="/noticia1Image@2x.png"
              />
              <div className="self-stretch h-[156px] flex flex-row p-2.5 box-border items-start justify-start">
                <h3 className="m-0 flex-1 relative text-5xl leading-[34.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                  Nuevo Centro de Acceso a la Justicia en San Luis
                </h3>
              </div>
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-primary-500 text-left">
                  12 de Semptiembre
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro-100 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
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
                <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-primary-500 text-left">
                  12 de Semptiembre
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro-100 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/noticia3Image@2x.png"
              />
              <div className="self-stretch h-[158px] flex flex-row p-2.5 box-border items-start justify-start">
                <h3 className="m-0 flex-1 relative text-5xl leading-[30.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                  El Ministerio de Justicia y Derechos Humanos y la SENAF lanzan
                  Campaña Nacional de Adopción
                </h3>
              </div>
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-primary-500 text-left">
                  12 de Semptiembre
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-200 hover:mix-blend-normal hover:bg-gainsboro-100 hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/noticia4Image@2x.png"
              />
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <h3 className="m-0 flex-1 relative text-5xl leading-[27.82px] font-medium font-body-regular-600 text-gray-700 text-left">
                  Finalizó la centralización de la documentación vinculada a la
                  causa AMIA en las instalaciones del Palacio Barolo
                </h3>
              </div>
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-primary-500 text-left">
                  12 de Semptiembre
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-6 bg-mediumblue rounded flex flex-row items-start justify-start">
          <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
            Ver mas noticias
          </div>
        </button>
      </form>
      <section className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-gray-white font-body-regular-600">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <h2 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
              Servicios
            </h2>
            <div className="self-stretch relative text-xl leading-[28px]">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-[15px] text-black">
            <CardLink
              imageDimensions="/place-marker@2x.png"
              imageDimensionsText="/mappin.svg"
              serviceDescription="Centros de Acceso a Justicia"
            />
            <CardLink
              imageDimensions="/tied-hands@2x.png"
              imageDimensionsText="/mappin1.svg"
              serviceDescription="Atención a víctimas"
              propWidth="182px"
              propHeight="289px"
            />
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 rounded-md [background:linear-gradient(180deg,_#fff,_#898989_73.75%,_#fff)] h-[426px] flex flex-col p-6 box-border items-center justify-end gap-[10px] min-w-[355px] max-w-[370px] text-[inherit]"
              href="/"
            >
              <img
                className="relative w-[229px] h-[269px] object-cover"
                alt=""
                src="/diploma@2x.png"
              />
              <div className="self-stretch h-6 flex flex-row items-end justify-center">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/mappin.svg" />
                  <div className="relative leading-[24px] font-medium">
                    Solicitar certificado de antecedentes penales
                  </div>
                </div>
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 rounded-md [background:linear-gradient(180deg,_#fff,_#898989_73.75%,_#fff)] h-[426px] flex flex-col p-6 box-border items-center justify-end gap-[10px] min-w-[355px] max-w-[370px] text-base text-[inherit]"
              href="/"
            >
              <img
                className="relative w-[212px] h-[257px]"
                alt=""
                src="/auto-deskew.svg"
              />
              <div className="self-stretch h-6 flex flex-row items-end justify-center">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/mappin1.svg" />
                  <div className="relative leading-[24px] font-medium">
                    {" "}
                    certificado de dominio del automotor
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-6 bg-mediumblue rounded flex flex-row items-start justify-start">
          <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
            Ver mas Servicios
          </div>
        </button>
      </section>
      <section className="self-stretch bg-gray-white flex flex-row flex-wrap py-[86px] px-[5px] items-start justify-center text-center text-21xl text-primary-800 font-body-regular-600">
        <div className="flex-1 flex flex-col py-0 px-2.5 box-border items-center justify-start gap-[40px] max-w-[900px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <h2 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
              Contáctanos
            </h2>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-skyblue shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-center justify-start gap-[17px] text-left text-5xl text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit">
                Formulario
              </h3>
              <div className="self-stretch relative text-[18px] leading-[30px] font-roboto text-slategray">
                Tienes alguna duda juridica? Preguntanos y llena el formulario a
                continuacion
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
                <input
                  className="font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray1-300 md:flex-[unset] md:self-stretch"
                  placeholder="Primer Nombre"
                  type="text"
                />
                <input
                  className="font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-center border-[1px] border-solid border-gray1-300 md:flex-[unset] md:self-stretch"
                  placeholder="Apellidos"
                  type="text"
                />
              </div>
              <input
                className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray1-300"
                placeholder="Email id"
                type="text"
              />
              <textarea
                className="bg-[transparent] font-roboto text-base self-stretch rounded box-border h-[105px] flex flex-col p-3 items-start justify-start border-[1px] border-solid border-gray1-300"
                placeholder="Comentarios o Preguntas"
                required={true}
              />
              <button className="cursor-pointer [border:none] p-0 bg-mediumblue rounded w-[222px] h-[46px] flex flex-col items-center justify-center">
                <div className="relative text-base font-roboto text-gray-white text-center inline-block w-[203.12px]">
                  Enviar
                </div>
              </button>
            </div>
          </div>
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
                  src="/logoFooter1.svg"
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
                  src="/facebookIcon1.svg"
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
                  src="/linkedinIcon1.svg"
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
                  src="/instagramIcon1.svg"
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

export default LandingPageJusticiaB;
