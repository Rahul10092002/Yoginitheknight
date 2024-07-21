import React from 'react'
import Card from './Card';
import { cards } from '@/lib/constant';

function Services() {
  return (
    <div className="flex flex-col text-center justify-center pt-12 ">
      <h1 className="text-slate-100 text-xl font-semibold text-slate-950">
        OUR SERVICES
      </h1>
      <h2 className=" align-middle flex justify-center  mt-2 text-2xl font-bold sm:text-4xl tracking-wide sm:text-left">
        Practice Wherever you want, Whenever you need
      </h2>{" "}
      <p className="mt-4 text-gray-900  text-left flex justify-center text-center">
        Learn from recognized, certified, and specialist yogacharyaa. Keep
        yourself away from injuries and misalignments and live a <br /> healthy,
        happy, and disease-free life.
      </p>


      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services