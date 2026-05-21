import React from 'react';

const Count = () => {
    const ContentArray = [
        {
            'count': 80,
            'text': 'Satisfied clients'
        },
        {
            'count': 200,
            'text': 'Projects completed'
        },
        {
            'count': 99,
            'text': 'Reviews given'
        }
    ]
    const Bar="relative  after:absolute after:right-[-90px] after:top-[50%] after:translate-y-[-50%] after:h-[90px] after:w-[1px] after:bg-[#00b55a] after:content-['']"
    return (
        <div className="flex flex-wrap  gap-8 md:gap-[200px] py-[90px]">
            {ContentArray.map((item, index) => {
                return (
                    <div key={index} class={`${index === ContentArray.length-1?'':Bar}`}>
                        <div className="text-4xl sm:text-5xl font-bold text-[#00b55a]">{item.count}+</div>
                        <div className="text-dark-500 mt-3 md:text-3xl">{item.text}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default Count;