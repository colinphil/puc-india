<template>
  <Layout>
    <div class="outer">
      <div class="top-content">
        <g-image src="../../static/building.png"/>
        <div class="top-text">
          <h1>Our Project</h1>
          <p>PUC India is designing, funding, and constructing a <strong>31' x 26' Multipurpose Community Center</strong> for the village of Siripudi. The structure is designed to serve three main purposes: natural disaster relief, administering medical care, and 
              providing a venue for education.
          </p>
        </div>
      </div>
    </div>

    <div class="other">
        <div class="partners">
            <div class="partner">
                <div class="partner-description">
                    <h1><strong>Project Overview</strong></h1>
                    <p><em>Siripudi, Guntur District, Andhra Pradesh</em></p>
                    <hr/>
                    <div class="detail">
                        <h3><strong>Objective:</strong></h3>
                        <p><em>Establish a permanent <strong>Multipurpose Community Center</strong> in the village of Siripudi, India.</em></p>
                    </div>
                    <div class="detail">
                        <h3><strong>Scope:</strong></h3>
                        <p><em><strong>31' x 26' Structure &#183; Elevated Foundation &#183; Electrical Wiring</strong></em></p>
                    </div>
                    <div class="detail">
                        <h3><strong>Impact:</strong></h3>
                        <p><em>Provide <strong>shelter</strong> during inclement weather; a place to administer <strong>medical treatment</strong>; a foundation for an <strong>educational system</strong>; a venue for <strong>community events.</strong></em></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="other">
        <div class="partners">
            <div class="partner">
                <div class="partner-description motivation">
                    <h1><strong>Project Motivation</strong></h1>
                    <hr/>
                    <ul>
                        <li><font-awesome-icon :icon="['fas', 'warehouse']"/> &nbsp;Siripudi lacks any <strong>permanent infrastructure</strong> - the village is composed solely of thatched huts.</li>
                        <li><font-awesome-icon :icon="['fas', 'stethoscope']"/> &nbsp;The Indian government often sends doctors to villages like Siripudi - there is currently <strong>no place to safely administer care.</strong></li>
                        <li><font-awesome-icon :icon="['fas', 'running']"/> &nbsp;During the annual monsoon season, the villagers are forced to <strong>travel over 50 kilometers</strong> to a safe haven to escape flooding.</li>
                        <li><font-awesome-icon :icon="['fas', 'graduation-cap']"/> &nbsp;<strong>Schooling</strong> has recently begun at night for young children - sessions are held in residential huts without sufficient lighting.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="other">
        <div class="partners">
            <div class="partner">
                <div class="partner-description">
                    <h1><strong>Selected Designs</strong></h1>
                    <hr/>
                    <div class="design-gallery">
                        <g-image src="../../static/building-top.png"/>
                        <g-image src="../../static/building-other.png"/>
                        <g-image src="../../static/building-side.png"/>
                        <g-image src="../../static/building-other-side.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="other">
        <div class="partners">
            <div class="partner">
                <div class="partner-description status">
                    <h1><strong>Project Status &#38; Timeline</strong></h1>
                    <hr/>
                    <p><strong>Status: </strong> </p> 
                    <p class="description">Our designs are constantly undergoing reviews and revisions to create the most suitable and cost-efficient structure for the community. We are currently finalizing designs and securing a contractor for construction beginning in late Spring 2021.</p>
                    <p><strong>Timeline:</strong></p>
                    <ul>
                        <li><strong>November 2020</strong> &nbsp;<em>Complete fundraising and finalize designs / add-ons.</em></li>
                        <li><strong>December 2020</strong> &nbsp;<em>Secure contractor and complete construction schedule.</em></li>
                        <li><strong>February 2021</strong> &nbsp;<em>Set all logistics in stone and accomodations/travel itinerary.</em></li>
                        <li><strong>March 2021</strong> &nbsp;<em>Obtain formal governmental approval and begin construction preparation.</em></li>
                        <li><strong>May 2021</strong> &nbsp;<em>Begin construction and arrive in India to assist in implementation!</em></li>
                    </ul>
                </div>
            </div>
            <a rel="noopener noreferrer" href="https://hornraiser.utexas.edu/project/19269" target="_blank">Help Make This a Reality!</a>
        </div>
    </div>

  </Layout>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core';
  import {faWarehouse, faStethoscope, faRunning, faGraduationCap} from '@fortawesome/free-solid-svg-icons';

  library.add(faWarehouse, faStethoscope, faRunning, faGraduationCap);
 
export default {
  metaInfo: {
    title: 'Our Project',
    meta: [
      {name: 'author', content: 'Colin Phillips'}
    ]
  }
}
</script>

<style scoped>
 /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

 .partners a{
      margin-top: 20px;
      text-decoration: none;
      color: white;
      background-color: #CC5500;
      padding: 15px;
      font-weight: bold;
      border-radius: 10px;
  }

  .partners a:hover{
      opacity: 0.8;
  }

  .status p {
      margin-bottom: 0;
      font-size: 1.2em;
  }

  .status p:nth-of-type(3){
      margin-bottom: 5px;
  }

  .status ul li{
      list-style: circle;
  }

  .status .description {
      margin-bottom: 15px;
  }

  .design-gallery{
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
  }

  .design-gallery img{
      width: 45%;
      height: auto;
      margin-bottom: 70px;
  }
  /* Partners Styling */
  .partners {
      width: 70%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
  }

  .motivation ul li{
      font-size: 1.1em;
      list-style: none;
      margin-bottom: 5px;
  }

  .motivation ul {
      padding-left: 0;
  }

  .partner-description ul li svg {
      color: #CC5500;
  }

  .detail {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
  }

  .detail h3 {
      width: 20%;
  }

  .detail p{
      width: 80%;
      font-weight: normal;
  }

  @media screen and (max-width: 1050px){
      .detail h3{
          font-size: 1.2em;
      }
  }

  @media screen and (max-width: 710px){
      .detail h3{
          font-size: 1em;
      }
  }

  @media screen and (max-width: 590px){
      .detail h3{
          font-size: 0.9em;
      }
  }

  @media screen and (max-width: 552px){
      .detail h3{
          font-size: 0.75em;
      }
  }

  .partner {
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
  }


  .partner-description {
      width: 100%;
  }

  .partner-description h1 {
      border-left: 8px solid #CC5500;
      padding-left: 20px;
  }

  .partner-description p:nth-of-type(1){
      font-size: 1.2em;
  }

  .partner-description p:nth-of-type(1) a{
      color: #CC5500;
  }

  .partner-description p a:hover {
      opacity: 0.8;
  }

  p strong{
      color: #CC5500;
  }

  .partner-description p a {
      color: #CC5500;
      font-weight: bold;
  }

  @media screen and (max-width:1000px){
      .partner-description h1 {
          font-size: 1.2em;
      }

      .partner-description p{
          font-size: 0.8em;
      }

      .partner-description p:nth-of-type(1){
          font-size: 0.8em;
      }
  }

  @media screen and (max-width: 750px){
      .partner{
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
              -ms-flex-direction: column;
                  flex-direction: column;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
      }

      .partner img {
          width: 50%;
          margin-bottom: 40px;
      }
  }


  /* Top Styling */
  .outer{
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 150px;
    margin-top: 70px;
  }

  .other{
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 100px;
    margin-top: 70px;
  }

  .top-content{
    width: 70%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }

  .top-text{
    width: 60%;
  }

  .top-text p strong{
      color: #CC5500;
  }

  .top-content img {
    width: 30%;
  }

  .top-text p{
    font-size: 1.1em;
  }

  .top-text h1{
    font-size: 4em;
    border-left: 8px solid #CC5500;
    padding-left: 20px;
  }

  @media screen and (max-width: 1155px){
    .top-text h1{
      font-size: 3em;
    }
  }

  @media screen and (max-width: 880px){
    .top-text h1{
      font-size: 2em;
    }

    .top-text p {
      font-size: 0.9em;
    }
  }

  @media screen and (max-width: 680px){
    .top-text h1{
      font-size: 1.5em;
    }

    .top-text p {
      font-size: 0.75em;
    }
  }

  @media screen and (max-width: 625px){

    .top-content{
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
    }

    .top-content img{
      width: 80%;
      margin-bottom: 50px;
    }

    .top-text {
      width: 80%;
    }

    .top-text h1{
      font-size: 2em;
    }

    .top-text p {
      font-size: 0.9em;
    }
  }

</style>