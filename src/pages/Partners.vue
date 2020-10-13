<template>
  <Layout>
    <div class="outer">
      <div class="top-content">
        <img src="../../static/undraw_agreement_aajr.svg"/>
        <div class="top-text">
          <h1>Our Partners</h1>
          <p>We collaborate with a variety of organizations and engineers from across two continents. Without these individuals, the project would not be where it is today and despite the COVID-19 setback, 
              we are poised to continue our international work with these amazing people.</p>
        </div>
      </div>
    </div>

    <div class="outer">
        <div class="partners">

            <div class="partner">
                <div class="partner-description">
                    <h1><strong>Church's Auxiliary for Social Action (CASA)</strong></h1>
                    <p><em>Indian Non-Governmental Organization (NGO)</em> &nbsp;<a href="http://casa-india.org/" target="_blank"><font-awesome-icon :icon="['fas', 'globe']"/></a></p>
                    <hr/>
                    <p>CASA is an NGO based in New Delhi which focuses on promoting education, gender equality, and sustainable livelihoods across India. CASA has partnered with PUC teams in the past and has been facilitating 
                        the dialogue between the team and community. Their awesome team members have gone above and beyond to support the project and we're looking forward to working them throughout this year!
                    </p>
                </div>
                <img src="../../static/casa.jpg"/>
            </div>
            <div class="partner">
                <img src="../../static/ken.jpg"/>
                <div class="partner-description">
                    <h1><strong>Ken Hanks, P.E.</strong></h1>
                    <p><em>Senior Structural Engineer</em> &nbsp;<a href="https://www.linkedin.com/in/ken-hanks-9076554/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a></p>
                    <hr/>
                    <p>Ken "Kenjamin" Hanks is a practicing Structural Engineer in Austin, Texas that has been serving as the team's Traveling Technical Adviser for the project. He has been vital in providing 
                        feedback and evaluating our designs. He will be assisting the team during the implementation phase by traveling with us to Siripudi in May 2021. 
                    </p>
                </div>
            </div>
            <div class="partner">
                <div class="partner-description">
                    <h1><strong>Poul Luther</strong></h1>
                    <p><em>Project Manager, CASA</em> </p>
                    <hr/>
                    <p>Poul is our fantastic point-of-contact at CASA that has been, and will continue to be, a crucial part of our project. He has helped us throughout the ideation phase and is assisting the team to secure a contractor and lodging once we travel. 
                        We've talked with him consistently throughout this past year and are looking forward to finally meeting him in person!
                    </p>
                </div>
                <img src="../../static/poul.jpg"/>
            </div>
            <div class="partner">
                <img src="../../static/puclogo_edited_edited.webp"/>
                <div class="partner-description">
                    <h1><strong>Projects with Underserved Communities (PUC)</strong></h1>
                    <p><em>Humanitarian Engineering Organization</em> &nbsp;<a href="https://global.utexas.edu/abroad/programs/service-learning/projects-underserved-communities" target="_blank"><font-awesome-icon :icon="['fas', 'globe']"/></a></p>
                    <hr/>
                    <p>The greater Projects with Underserved Communities organization is composed of four teams creating projects for four different countries. The Service Learning Advisory Board (SLAB) of engineering professionals and professors provides
                        guidance and serves as a resource for each team.
                    </p>
                </div>
            </div>  
        </div>

    </div>

  </Layout>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
  import {faGlobe} from '@fortawesome/free-solid-svg-icons';

  library.add(faLinkedin, faGlobe);
 
export default {
  metaInfo: {
    title: 'Our Partners'
  }
}
</script>

<style>

  /* Partners Styling */
 /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

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

  .partner:nth-of-type(1) img{
      border-radius: 0;
  }

  .partner img{
      width: 25%;
      height: auto;
      border-radius: 50%;
  }

  .partner-description {
      width: 70%;
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