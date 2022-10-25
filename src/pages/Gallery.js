import React from 'react';
import Banner from '../components/common/Banner';
import '@ptkdev/webcomponent-instagram-widget';
import GalleryPlainText from '../components/Gallery/GalleryPlainText';
import GallerySocialShareIcons from '../components/Gallery/GallerySocialShareIcons';
import { getStyle } from './../helper';
import InstagramEmbed from 'react-instagram-embed'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const Gallery = () => {
  return (
    <div className="main" id="gallerybx">
      <section>
        <div
          className="hero-equal-height pt-165 pb-150 gradient-overly-right-light pagebanner"
          page="gallery"
          style={getStyle('gallery', 'galleryBanner.jpg')}
        >
          <Banner
            breadcrunmbLink="Gallery"
            heading="What are we up to?"
            text=" "
          ></Banner>
        </div>
      </section>
      <section>
        <GalleryPlainText
          heading="Follow Us on Social Media to Find Out"
          content="Transition Discoveries is always looking to highlight your story. Check out some of the fun and unique ways we connect young people, families and community members through the moments we've captured! Stay up to date with the latest action or check out past events in our gallery below!"
        ></GalleryPlainText>
      </section>
      <section>
        <div className="container-fluid">
        <InstagramFeed token={'IGQVJVR1pwNUZACYmE4SEZAsWGtkbWY2N25YSzNNX1lLbFM3bHliaUNlaGJxRm9WUlhsNUVtc3RLODRXajBKcm9SSF9adTFOejA5UjFiMjFXSExIRWFBQnJ5dE9xZAVgwWEw2OHNobUYtejdRUEI1TjA5OAZDZD'}  counter="18"/>
        {/* <InstagramEmbed
          url='https://www.instagram.com/downpourwb/'
          clientAccessToken='802297497049275|ec2a5f7dc7a85693581a4e3b8e372671'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        /> */}
          {/* <script src="https://cdn.jsdelivr.net/npm/@ptkdev/webcomponent-instagram-widget@latest/dist/lib/en/instagram-widget.min.js"></script> */}
        </div>
      </section>
      <section>
        <div className="container">
          <GallerySocialShareIcons></GallerySocialShareIcons>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
