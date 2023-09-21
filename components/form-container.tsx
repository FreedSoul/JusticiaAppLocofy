import type { NextPage } from "next";

type FormContainerType = {
  itemImage?: string;
  categoryName?: string;
};

const FormContainer: NextPage<FormContainerType> = ({
  itemImage,
  categoryName,
}) => {
  return (
    <div className="flex-1 rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px] text-center text-5xl text-gray-700 font-body-regular-600">
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={itemImage}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
            {categoryName}
          </h3>
          <div className="relative text-base leading-[24px] text-gray-400 text-left flex items-end w-[268px]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-body-regular-600 text-primary-500 text-left inline-block">
            Leer mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
