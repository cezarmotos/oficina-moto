"use client";

import Image from "next/image";
import Localization from "../Localization";
import Button from "../ui/Button";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full gap-8">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-goldman text-brand text-center">
        Entre Em Contato
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center md:justify-around gap-4 md:gap-6">
        <div className="w-full md:w-auto px-4">
          <Button
            className="text-light flex items-center text-base sm:text-2xl w-full md:w-auto justify-center"
            variant="green"
            onClick={() =>
              window.open("https://web.whatsapp.com/send?phone=5553984228290", "_blank")
            }
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-base sm:text-2xl font-bold">Chame pelo Whatsapp</span>
              <div className="bg-green-500 color-white rounded-full p-1 ml-0 sm:ml-2">
                <Image src="/images/whatsapp.png" alt="Whatsapp Icon" width={24} height={24} />
              </div>
            </div>
          </Button>
        </div>

        <div className="w-full md:w-auto px-4">
          <div className="text-base sm:text-2xl bg-gray-200 p-4 rounded-lg flex flex-col gap-2 w-full text-center md:text-left">
            <p className="text-gray-600">
              ligue para <span className="font-bold">(53) 3228-8290</span>
            </p>
            <p className="text-gray-600">
              Ligue para <span className="font-bold">(53) 98422-8290 (WhatsApp)</span>
            </p>
          </div>
        </div>
      </div>
      <Localization />
    </div>
  );
};

export default Contact;
