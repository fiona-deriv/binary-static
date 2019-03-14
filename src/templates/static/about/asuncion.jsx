import React from 'react';
import { BoxOverlayImage } from '../../_common/components/box_row.jsx';
import ImageSlider from '../../_common/components/image_slider.jsx';

const Asuncion = () =>  (
    <div className='static_full location-asuncion'>
        <div className='introduction'>
            <div className='container gr-row gr-padding-20'>
                <div className='gr-12 gr-padding-20 center-text'>
                    <h1>{it.L('Asunción')}</h1>
                    <h4 className='subheader'>{it.L('Mother of Cities')}</h4>
                </div>
                <div className='gr-12 gr-padding-20 gr-centered'>
                    <div className='gr-row'>
                        <div className='gr-5 gr-12-p gr-12-m'>
                            <img className='responsive' src={it.url_for('images/pages/careers/asuncion/introduction-asuncion.jpg')} />
                        </div>
                        <div className='gr-7 gr-12-p gr-12-m'>
                            <p className='no-margin-top'>{it.L('Asunción is the capital city of Paraguay and one of the oldest settlements in South America. In the past, colonial expeditions departed from Asunción to establish other important cities, leading to its nickname as the ‘Mother of Cities’.')}</p>
                            <p>{it.L('As the country’s cultural heartbeat and economic centre, Asunción is undergoing an impressive economic boom that’s resulting in widespread development across the city. Today, you’ll find charming colonial buildings intermingling with modern office buildings, bustling shopping malls, and trendy eateries.')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='living fill-bg-color'>
            <div className='container gr-row gr-padding-30 center-text'>
                <div className='gr-12 gr-padding-20 center-text'>
                    <h2>{it.L('Living in Asunción')}</h2>
                </div>
                <div className='gr-12'>
                    <div className='container center-text'>
                        <ImageSlider
                            images={[
                                {
                                    url    : 'images/pages/careers/asuncion/asuncion-city.jpg',
                                    caption: it.L('Spanish and Guaraní are the two official languages of the country. Most Paraguayans are comfortably bilingual, although Guaraní is more widely spoken outside urban areas. In the capital, Spanish is the dominant language but you can easily find English speakers too.'),
                                },
                                {
                                    url    : 'images/pages/careers/asuncion/asuncion-food.jpg',
                                    caption: it.L('Paraguayan cuisine mostly consists of meat, mandioca, corn, milk, and cheese. Must-tries include chipá, a bagel-shaped bread; mbejú, a type of pancake made from mandioca and cheese; and tereré, a cold-brewed tea that’s an integral part of everyday life. Paraguayans are generally happy and relaxed; get-togethers with family and friends are the norm on weekends, especially over a hearty barbecue.'),
                                },
                                {
                                    url    : 'images/pages/careers/asuncion/asuncion-university.jpg',
                                    caption: it.L('Asunción has one of the lowest costs of living in the world, being ranked 386th out of 441 cities by Numbeo, the world’s largest database of crowdsourced consumer data. International schools with a bilingual curriculum (Spanish and English) are popular among foreigners with children. You’ll also have easy access to quality healthcare with well-equipped private hospitals staffed with English-speaking doctors.'),
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='misc'>
            <div className='container gr-row gr-padding-30 center-text'>
                <div className='gr-12 gr-padding-20 center-text'>
                    <h2>{it.L('Can\'t miss in Malta')}</h2>
                </div>
                <BoxOverlayImage
                    title={it.L('Natural wonders')}
                    text={it.L('Malta\'s natural attractions are absolutely breathtaking, from its sheer cliffs and lush valleys to its golden sandy beaches and underwater structures in clear blue seas.')}
                    img_src={it.url_for('images/pages/careers/asuncion/asuncion-fascinating-culture@2.jpg')}
                />
                <BoxOverlayImage
                    alignment='right'
                    title={it.L('Festivals galore')}
                    text={it.L('Malta celebrates a large number of religious festivities and cultural events every year, filling the streets with carts laden with traditional sweets and delicacies.')}
                    img_src={it.url_for('images/pages/careers/asuncion/asuncion-fascinating-culture.jpg')}
                />
            </div>
        </div>
    </div>
);

export default Asuncion;
