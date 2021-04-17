import React from 'react';
import wilson from '../../../../images/doctor-1.png'
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';
import './Testimonial.css'

const Testimonial = () => {
    const testimonialData = [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Wilson Harry',
            from: 'California',
            img: wilson
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Ema Gomez',
            from: 'California',
            img: wilson
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Aliza Farari',
            from: 'California',
            img: wilson
        }
    ]
    return (
        <section className="testimonials my-5 py-5">
            <div className="container text-center">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">
                        Testimonial
                  </h5>
                    <h3>What Our Client Says</h3>
                </div>

                <div className="row card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <TestimonialInfo testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;