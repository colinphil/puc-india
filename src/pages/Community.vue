<template>
  <Layout>
    <div class="outer">
      <div class="top-content">
        <img src="../../static/india-map-1696413-1438120.png"/>
        <div class="top-text">
          <h1>The Community</h1>
          <p>We are fortunate to be working with the community of <strong>Siripudi</strong> in the state of <strong>Andhra Pradesh</strong>, India. This community is composed of 
          people from  the Scheduled Caste and Tribes, the lowest rung of the Indian caste system. As a result, they are <strong>socioeconomically ostracized</strong> and the COVID-19 epidemic
          has only accentuated the obstacles they face daily.</p>
        </div>
      </div>
    </div>

    <div class="outer">
        <div class="partners">

            <div class="partner">
                <div class="partner-description">
                    <h1><strong>Siripudi Overview</strong></h1>
                    <p><em>Guntur District, Andhra Pradesh</em> &nbsp;<a href="https://www.google.com/maps/place/Siripudi,+Andhra+Pradesh+522329,+India/@15.9291903,80.4368456,10.77z/data=!4m5!3m4!1s0x3a4a1856b744ece5:0x77d9a24ccaadb854!8m2!3d15.9946689!4d80.6729185?hl=en&authuser=0" target="_blank"><font-awesome-icon :icon="['fas', 'map-marked-alt']"/></a></p>
                    <hr/>
                    <p>The villagers of Siripudi face daily discrimination as members of the lowest caste system in India - securing consistent work is often difficult. With only thatched houses, the village has <strong>no permanent infrastructure</strong> and is vulnerable to <strong>seasonal monsoon flooding</strong>. 
                        Regular schooling has recently begun for the largely illiterate community, held within the residental huts at night.
                    </p>
                </div>
                <img src="../../static/village-group.png"/>
            </div>

            <div class="partner">
                <img src="../../static/covid.jpg"/>
                <div class="partner-description">
                    <h1><strong>COVID-19 Impact</strong></h1>
                    <p><em>April 2020 - Present</em></p>
                    <hr/>
                    <p>The COVID-19 pandemic has significantly disrupted the Indian economy, leading to many communities, including Siripudi, to experience <strong>food shortages</strong>. Government rations have been insufficient with the ongoing lockdown
                    and the PUC team in Spring 2020 was able to raise over $1,600 to provide some support. We highly recommend learning more about the current lockdown and consider donating to 
                    <a href="http://casa-india.org/donate/" target="_blank">CASA</a>.
                    </p>
                </div>
            </div>
            
        </div>

    </div>

  </Layout>
</template>

<script scoped>

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
  import {faGlobe, faMapMarkedAlt, faMarker} from '@fortawesome/free-solid-svg-icons';

  library.add(faLinkedin, faGlobe, faMapMarkedAlt);
 
export default {
  metaInfo: {
    title: 'The Community'
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
      margin-bottom: 100px;
  }

  .partner img{
      width: 40%;
      height: auto;
      border-radius: 10px;
  }

  .partner-description {
      width: 50%;
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
    margin-bottom: 180px;
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

</style>>
