import Image from 'next/image';
import Footer from '@/components/server/Footer';

export default function OmMig() {
  return (
    <>
      <div className="relative min-h-screen mb-4 md:mb-0">
        {/* Image Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-1 mb-12">
          <div className="aspect-[4/3] relative overflow-hidden group">
            <Image
              src="/gallery/image1.jpg"
              alt="Akvarell 1"
              width={500}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="aspect-[4/3] relative overflow-hidden group">
            <Image
              src="/gallery/image2.jpg"
              alt="Akvarell 2"
              width={500}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="aspect-[4/3] relative overflow-hidden group">
            <Image
              src="/gallery/image3.jpg"
              alt="Akvarell 3"
              width={500}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto mt-8 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Om mig section */}
            <div className="text-custom-blue space-y-6">
              <h1 className="text-3xl lg:text-4xl font-caslon text-custom-blue mb-6">
                Om mig
              </h1>
              <div className="text-sm space-y-6">
                <p>
                  Självlärd akvarellmålare. Utbildad landskapsarkitekt från
                  Jämtland men nu bosatt i Malmö.
                </p>
                <p>
                  I mitt skapande av akvarellerna inspireras jag mycket av mina
                  barndomsmiljöer i Jämtland. Den norrländska naturen har
                  präglat mig mycket som person och i mitt skapande.
                  Favoritmotiven som jag ofta gestaltar är kalla myrar,
                  kalhyggen, sjöar och skog.
                </p>
              </div>
            </div>

            {/* Utställningar section */}
            <div className="text-custom-blue space-y-6">
              <h2 className="text-3xl lg:text-4xl font-caslon mb-10">
                Utställningar
              </h2>
              <div className="text-sm space-y-6">
              <div className="flex">
                  <div className="mr-8">2025</div>
                  <div>
                    <p>Stockholms konstsalong</p>
                    <p className="italic">Bedömd gruppuställning</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-8">2024</div>
                  <div>
                    <p>Galleri Viken - Julsalong</p>
                    <p className="italic">Bedömd gruppuställning</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-8">2024</div>
                  <div>
                    <p>KKAM Höganäs - Novembersalong</p>
                    <p className="italic">Jurybedömd uställning</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-8">2023</div>
                  <div>
                    <p>Romele Konsthall - Höstsalong</p>
                    <p className="italic">Jurybedömd uställning</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-8">2021</div>
                  <div>
                    <p>Galleri Åre - Samlingsuställning Här</p>
                    <p className="italic">Grupputställning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
