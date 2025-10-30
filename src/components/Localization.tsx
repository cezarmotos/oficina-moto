const Localization: React.FC = () => {
  const address = "Rua Daniel Robinson Silveira de Moraes, 319, Areal, Pelotas - RS, 96080-447";
  const mapsQuery = encodeURIComponent(address);
  const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&z=17&output=embed`;
  const mapsLink = `https://www.google.com/maps?q=${mapsQuery}`;
  return (
    <div className="w-full h-full px-4 sm:px-6 md:px-24 py-6 sm:py-12">
      <iframe
        title="Localização - Cezar Motos"
        src={mapsEmbedSrc}
        className="w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-lg border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-col mt-3 text-sm sm:text-base text-center">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand text-lg sm:text-2xl hover:underline"
        >
          Abrir no Google Maps
        </a>
        <p className="mt-1 text-paynes-gray break-words">{address}</p>
      </div>
    </div>
  );
};

export default Localization;
