import type { NextPage } from "next";

const JusticiaFooterSection: NextPage = () => {
  return (
    <footer className="self-stretch flex flex-row p-[50px] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
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
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="relative w-5 h-[21.67px]"
                alt="facebook icon"
                src="/facebook-icon.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt="linkedin icon"
                src="/linkedin-icon.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
            Enlaces del Sitio
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
            <div className="relative leading-[24px]">Gestion Digital</div>
            <div className="relative leading-[24px]">Corte Suprema</div>
            <div className="relative leading-[24px]">Jurisprudencia</div>
            <div className="relative leading-[24px]">Guia Juridica</div>
            <div className="relative leading-[24px]">Uso Interno</div>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
            Servicios
          </h3>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base">
            <div className="relative leading-[24px]">Atencion a Victimas</div>
            <div className="relative leading-[24px]">
              Certificado de antecedentes
            </div>
            <div className="relative leading-[24px]">
              Certificado de Propiedad
            </div>
            <div className="relative leading-[24px]">Acceso a la justicia</div>
            <div className="relative leading-[24px]">Blog</div>
          </div>
        </div>
        <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
            Politicas
          </h3>
          <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base">
            <div className="relative leading-[24px]">
              Politica de privacidad
            </div>
            <div className="relative leading-[24px]">Seguridad</div>
            <div className="relative leading-[24px]">Security</div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default JusticiaFooterSection;
