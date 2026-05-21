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
    const Bar="sm:relative sm:after:absolute sm:after:right-[-90px] sm:after:top-[50%] sm:after:translate-y-[-50%] sm:after:h-[90px] sm:after:w-[1px] sm:after:bg-[#00b55a] sm:after:content-['']"
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-[200px] py-12 md:py-[90px]">
            {ContentArray.map((item, index) => {
                return (
                    <div key={index} class={`${index === ContentArray.length-1?'':Bar}`}>
                        <div className="text-4xl sm:text-5xl font-bold text-[#00b55a]">{item.count}+</div>
                        <div className="text-dark-500 mt-3 md:text-3xl whitespace-nowrap">{item.text}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default Count;