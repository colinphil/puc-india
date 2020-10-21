<template>
  <Layout>

    <div class="outer">
      <div class="inner">
        <div class="gallery">
          <div class="first-column">
            <div class="ut">
              <h1>What Starts Here Changes the World  </h1>
            </div>
            <g-image class="first" src="../../static/team.png"/>
          </div>
          <div class="second-column">
            <g-image src="../../static/21-team-horns.jpg"/>
            <g-image src="../../static/covid-response.png"/>
            <g-image src="../../static/girl-day.jpeg"/>
          </div>
        </div>
      </div>
    </div>

    <div class="outer">
        <div class="fast-facts">
          <h1><strong>What We Do</strong></h1>
        </div>
        <div class="what">
          <div class="what-images">
            <g-image src="../../static/undraw_team_spirit_hrr4.svg"/>
            <g-image src="../../static/undraw_Scrum_board_re_wk7v.svg"/>
            <g-image src="../../static/undraw_under_construction_46pa.svg"/>
          </div>
          <div class="what-cards">
            <div class="what-content">
              <h3><strong><span>01.</span> Collaborate</strong></h3>
              <p>Since Fall 2019, we have been working with a non-governmental organization (NGO) in India to identify pressing issues in local communities.</p>
            </div>
            <div class="what-content">
              <h3><strong><span>02.</span> Conceptualize</strong></h3>
              <p>We've designed a <strong>31' x 26' Multipurpose Community Center</strong> to provide crucial infrastrcture for the village of Siripudi in Andhra Pradesh.</p>
            </div>
            <div class="what-content">
              <h3><strong><span>03.</span> Create</strong></h3>
              <p>The team will <strong>completely fund</strong>, develop implementation timelines, and directly <strong>oversee construction</strong> in India during Summer 2021.</p>
            </div>
          </div>
        </div>
    </div>

    <div class="outer" id="sto">
      <div class="story">
        <div class="story-images">
          <g-image src="../../static/tower.jpg"/>
          <g-image src="../../static/candid-team.jpg"/>
          <g-image src="../../static/21-team.jpg"/>
        </div>
        <div class="story-content">
          <g-image src="../../static/paint.svg"/>
          <div><h1>Our Story</h1></div>
          <p>We're a team of <strong>Engineering and Social Work</strong> students at the <strong>University of Texas at Austin</strong> looking to make a real impact on a community in India. 
            We're teaming up with a local NGO to design, fund, and build a <strong>Multipurpose Community Center</strong> for the village of Siripudi in the state of <strong>Andhra Pradesh</strong>. 
            We're extremely excited about this amazing opportunity to combine humanitarian work with engineering - follow us on our journey and learn more about the team below!</p>
          <a type="button" href="/team">Meet the Team</a>
        </div>
      </div>
    </div>

    <div class="outer" id="mis">
        <div class="mission">
          <div class="text">
            <h1><strong>Our Mission</strong></h1>
            <p>Collaborate with local non-governmental organizations (NGOs) and the villagers 
              of <strong>Siripudi</strong> to construct a <strong>Multipurpose Community Center</strong> to improve education, 
              health treatment, and disaster preparedness of the area.
            </p>    
          </div>
          <g-image src="../../static/building.png"/>

        </div>
    </div>

    <div class="outer video">
      <iframe width="800" height="493.75" src="https://www.youtube.com/embed/pXNcXvk5Luo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="outer">
        <div class="fast-facts">
          <h1><strong>Fast Facts</strong></h1>
        </div>
        <hr/>
        <div class="facts">
          <div>
            <h4><em><font-awesome-icon :icon="['fas', 'dollar-sign']" /> Project Budget</em></h4>
            <h1>$27,287</h1>
          </div>
          <div>
            <h4><em><font-awesome-icon :icon="['fas', 'building']" /> Building Dimensions</em></h4>
            <h1>31' x 26'</h1>
          </div>
          <div>
            <h4><em><font-awesome-icon :icon="['fas', 'users']" /> Village Population</em></h4>
            <h1>2,385</h1>
          </div>
          <div>
            <h4><em><font-awesome-icon :icon="['fas', 'plane-departure']" /> Miles from Austin</em></h4>
            <h1>10,750</h1>
          </div>
          <div>
            <h4><em><font-awesome-icon :icon="['fas', 'hand-holding-usd']" /> Money Raised</em></h4>
            <h1>$22,578</h1>
          </div>
          <div>
            <h4><em><font-awesome-icon :icon="['fas', 'handshake']" /> Team Members</em></h4>
            <h1>14</h1>
          </div>
        </div>
    </div>

    <div class="outer">
        <div class="fast-facts">
          <h1><strong>Explore</strong></h1>
        </div>
        <div class="buttons">
          <a href="/team">
            <div class="button-card">
              <hr/>
              <h1><font-awesome-icon :icon="['fas', 'users']" /></h1>
              <h3>the team</h3>
              <hr/>
            </div>
          </a>
          <a href="/partners">
            <div class="button-card">
              <hr/>
              <h1><font-awesome-icon :icon="['fas', 'handshake']" /></h1>
              <h3>our partners</h3>
              <hr/>
            </div>
          </a>
          <a href="/community">
            <div class="button-card">
              <hr/>
              <h1><font-awesome-icon :icon="['fas', 'building']" /></h1>
              <h3>the community</h3>
              <hr/>
            </div>
          </a>
          <a href="/project">
            <div class="button-card">
             <hr/>
              <h1><font-awesome-icon :icon="['fas', 'tasks']" /></h1>
              <h3>the project</h3>
              <hr/>
            </div>
          </a>
        </div>
        <hr/>
    </div>

  </Layout>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faDollarSign, faBuilding, faUsers, faMapMarkerAlt, faGlobeAsia, faGlobe, faPlaneDeparture, faHandshake, faHandHoldingUsd, faTasks } from '@fortawesome/free-solid-svg-icons';
  import VueCountdown from '@chenfengyuan/vue-countdown';

  library.add(faDollarSign, faBuilding, faUsers, faMapMarkerAlt, faGlobeAsia, faPlaneDeparture, faHandshake, faHandHoldingUsd, faTasks);

  export default {
    metaInfo: {
     title: 'Home',
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

.what{
  margin-top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 70%;
  margin-bottom: 50px;
}

.what-images{
  margin-top: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.what-images img{
  width: 30%;
}

.what-cards{
  margin-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.what-cards .what-content{
  width: 30%;
}

.what-content p strong{
  color: #CC5500;
}

.what-content h3 span{
  color: #CC5500;
}

@media screen and (max-width: 1150px){

  .what-content h3{
    font-size: 1.5em;
  }
}

@media screen and (max-width: 700px){

  .what-content h3{
    font-size: 1em;
  }

  .what-content p {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 500px){

  .what-content h3{
    font-size: 0.8em;
  }
}
/* .what .what-card{
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
}

.what-card img {
  width: 80%;
  margin-bottom: 30px;
} */

.buttons {
  margin-top: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  width: 70%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.buttons a {
  width: 23%;
  text-decoration: none;
}

.buttons a div {
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
  color: white;
  border-radius: 5%;
}

.buttons a div h1 {
  font-size: 7em;
}

.buttons a div img {
  width: 70%;
}

.buttons a div{
  background-color: #CC5500;
}

.buttons a div:hover{
  background-color: #ffa500;
  -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    -webkit-transform: translateY(-10px);
        -ms-transform: translateY(-10px);
            transform: translateY(-10px);
}

@media screen and (max-width: 1288px){
  .buttons a div h3{
    font-size: 1.5em;
  }
}

@media screen and (max-width: 1100px){
  .buttons a div h3{
    font-size: 1.25em;
  }

  .buttons a div h1 {
    font-size: 5em;
  }
}

@media screen and (max-width: 930px){
  .buttons a div h3{
    font-size: 1em;
  }

  .buttons a div h1 {
    font-size: 4em;
  }
}

@media screen and (max-width: 750px){
  .buttons a div h3{
    display: none;
  }

  .buttons a div h1 {
    font-size: 3em;
  }
}

@media screen and (max-width: 672px){
  .buttons a div hr{
    display: none;
  }
}

@media screen and (max-width: 470px){
  .buttons a div h1 {
    font-size: 2.5em;
  }
}


#mis {
  margin-bottom: 90px;
}

#sto {
  margin-bottom: 80px;
}

.facts {
  width: 70%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.facts div {
  width: 33%;
  margin-bottom: 40px;
  text-align: center;
}


.facts div h1 {
  font-size: 3.5em;
}

.facts div h4 {
  margin-bottom: 0;
  color: #CC5500;
}

.fast-facts {
  width: 70%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  border-left: solid #CC5500 8px;
  padding-left: 20px;
}

.fast-facts h1 {
  margin-bottom: 0;
}

@media screen and (max-width: 1270px){
  .facts div {
    width: 40%;
  }

  .facts {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
}

@media screen and (max-width: 920px){
  .facts div h4{
    font-size: 1.25em;
  }
}

@media screen and (max-width: 775px){
  .facts div h4{
    font-size: 1.1em;
  }

  .facts div h1 {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 675px){
  .facts div h4{
    font-size: 0.9em;
  }

  .facts div h1 {
    font-size: 2.25em;
  }
}

@media screen and (max-width: 552px){
  .facts div h4{
    font-size: 0.8em;
  }

}

/* MISSION CONTENT */
/* Includes responsiveness */

.mission {
  width: 70%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.mission p{
  font-size: 1.25em;
}

.mission h1{
  border-left: 8px solid #CC5500;
  padding-left: 20px;
}

.mission p strong {
  color: #CC5500;
}

.mission .text{
  width: 60%;
}

.mission img {
  width: 30%;
}

@media screen and (max-width: 1300px){
  .mission p {
    font-size: 1em;
  }
}

@media screen and (max-width: 1100px) {
  .mission p {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 940px) {
  .mission p {
    font-size: 0.80em;
  }
}

@media screen and (max-width: 850px){
  .mission img {
    display: none;
  }

  .mission p {
    font-size: 1em;
  }

  .mission .text {
    width: 100%;
  }

  .mission {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
  }

  iframe {
    width: 70%;
  }
}


/* STORY CONTENT */
.story{
  width: 70%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.story-images{
  width: 53%;
}

.story-content {
  width: 35%;
}

.story-content img{
  height: 15%;
  width: 60%;
  margin-left: 50%;
  -webkit-transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
          transform: rotate(-15deg);
}

.story-content h1{
  margin-bottom: 0;
  font-weight: bold;
  padding-left: 20px;
}

.story-content div {
  border-left: 8px solid #CC5500;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.story-content a {
  text-align: center;
  color: white;
  background-color: #CC5500;
  padding: 10px;
  margin-top: 10px;
  margin-left: 30%;
  font-weight: bold;
  border-radius: 10px;
}

.story-content a:hover {
  text-decoration: none;
  background-color: #ffa500;
  -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    -webkit-transform: translateY(-3px);
        -ms-transform: translateY(-3px);
            transform: translateY(-3px);
}

.story-content p {
  margin-top: 30px;
  width: 100%;
  font-size: 1.2em;
}

.story-content p strong {
  color: #CC5500;
}

.story-images img:nth-of-type(1){
  width: 90%;
  position: relative;
  border-radius: 5%;
}

/* for PUC India 2020 version
.story-images img:nth-of-type(2){
  width: 30%;
  position: absolute;
  -webkit-transform: translate(-70%, 40%);
      -ms-transform: translate(-70%, 40%);
          transform: translate(-70%, 40%);
  border: solid white 10px;
  border-radius: 5%;
} */

.story-images img:nth-of-type(3){
  width: 25%;
  position: absolute;
  -webkit-transform: translate(-70%, 15%);
      -ms-transform: translate(-70%, 15%);
          transform: translate(-70%, 15%);
  border: solid white 10px;
  border-radius: 5%;
}

.story-images img:nth-of-type(2){
  width: 25%;
  position: absolute;
  -webkit-transform: translate(-70%, 120%);
      -ms-transform: translate(-70%, 120%);
          transform: translate(-70%, 120%);
  border: solid white 10px;
  border-radius: 5%;
}

@media screen and (max-width: 1700px){
  .story-content p {
    font-size: 1em;
  }
}

@media screen and (max-width: 1450px){
  .story-content img {
    width: 50%;
    margin-left: 60%;
  }

  .story-content p {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 1300px){
  .story-content img {
    width: 30%;
  }

  .story-content p {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 1250px){

  .story-content p {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 1100px){
  .story-content img {
    width: 20%;
    margin-left: 70%;
  }

  .story-content p {
    font-size: 0.75em;
  }
}

@media screen and (max-width: 1050px){
  .story {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }

  .story-images{
    width: 80%;
  } 

  /* .story-images img:nth-of-type(2){
    width: 40%;
  }

  .story-images img:nth-of-type(3){
    width: 40%;
  } */

  .story-images img:nth-of-type(2){
    width: 50%;
  }

  .story-content {
    margin-top: 50px;
    width: 80%;
    margin-bottom: 100px;
  }

  .story-content p {
    font-size: 1em;
  }

  .story-content img {
    display: none;
  }
}

.outer {
  width: 100%;
  margin: auto;
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
}

.inner {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
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

.gallery{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 80%;
  height: 100%;
}

.first-column, .second-column{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  width: 48%;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  height: 100%;
}

.first-column{
  flex-direction: column;
  align-items: center;
}

.first-column img:nth-of-type(1){
  width: 85%;
  position: relative;
  margin-top: 10px;
}

/* .first-column img:nth-of-type(1){
  position: absolute;
  z-index: 10;
  left: 7%;
  bottom: 13%;
  width: 150px;
  margin-bottom: 0;
  
} */
.first-column .ut{
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

.first-column .ut h1 {
  font-weight: bolder;
  font-size: 3em;
  text-transform: uppercase;
  color:#CC5500;
  border-left: solid #CC5500 10px;
  padding-left: 40px;
  margin-bottom: 20px;
  margin-left: 8%;
  padding-right: 10%;
}

.second-column img:nth-of-type(3){
  width: 40%;
  margin-bottom: 10px;
}

.second-column img:nth-of-type(2){
  width: 55%;
  margin-bottom: 10px;
}

.second-column img:nth-of-type(1){
  width: 100%;
}

.horizontal{
  width: 100%;
  background-color: orange;
  height: 20px;
  margin-bottom: 10px;
}

.horizontal:nth-of-type(2){
  background-color: green;
}

.gallery img {
  width: 30%;
  border-radius: 5%;
  margin-bottom: 20px;
}

.gallery p {
  font-size: 2em;
  font-weight: bold;
  color: #CC5500;
  letter-spacing: 1px;
}

.over{
  z-index: 10;
}

@media screen and (max-width: 1550px){

  .first-column .ut h1{
    font-size: 2em;
  }
}

@media screen and (max-width: 1300px){

  .first-column .ut h1{
    font-size: 1.8em;
  }
}


@media screen and (max-width: 1000px){

  .first-column .ut h1{
    font-size: 1.5em;
  }
}

@media screen and (max-width: 770px){

  .first-column .ut h1{
    font-size: 1.25em;
  }
}

@media screen and (max-width: 585px){

  .first-column .ut h1{
    font-size: 1em;
  }
}

@media screen and (max-width: 510px){

  .first-column .ut h1{
    font-size: 0.8em;
  }
}

@media screen and (max-width: 1000px){

  .horizontal:nth-of-type(2){
    display: none;
  }
}

</style>
