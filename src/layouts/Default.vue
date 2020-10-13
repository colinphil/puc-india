<template>
  <div id="main-wrapper">

    
    <!-- Navigation Bar -->
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">TEST</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header> -->
    <!-- <div id="horizontal-line"></div> -->

    <div class="navbar">
      <b-navbar toggleable="lg">
        <b-navbar-brand href="/"><g-image src="../../static/PUC.png"/> <span>&nbsp; Projects with Underserved Communities</span></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/" >Home</b-nav-item>
            <b-nav-item href="/team" >Team</b-nav-item>
            <b-nav-item href="/partners" >Partners</b-nav-item>
            <b-nav-item href="/community" >Community</b-nav-item>
            <b-nav-item href="/project" >Project</b-nav-item>
            <b-nav-item href="https://hornraiser.utexas.edu/project/19269" target="_blank">Donate</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- Content to be inserted -->
    <slot/>

    <div class="contact">
      <a href="https://www.instagram.com/pucindia2020/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" id='insta'/></a>
      <a href="https://www.facebook.com/PUCIndia2020" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" id='insta'/></a>
      <a href="https://www.youtube.com/channel/UC_O7a0sn-blWnHJKnLde0jQ" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
      <a href="mailto:pucindia2020@gmail.com" target="_blank"><font-awesome-icon :icon="['fas', 'inbox']" /></a>
    </div>

    <div class="footer">
      <div class="footer-content">
        <div class="footer-images">
          <img src="../../static/ut-primary.png"/>
        </div>
        <div class="footer-info">
          <h3>More Information</h3>
          <div class="links">
            <a href="https://admissions.utexas.edu/" target="_blank">UT Home</a>
            <a href="https://www.engr.utexas.edu/">Engineering Home</a>
            <a href="https://global.utexas.edu/abroad/programs/service-learning/projects-underserved-communities" target="_blank">Organization Website</a>
            <a href="https://global.utexas.edu/abroad/programs/service-learning/projects-underserved-communities" target="_blank">HornRaiser</a>
          </div>
          <hr/>
          <h3>Contact</h3>
          <div class="links">
            <p>2400 Nueces Street, Suite B</p>
            <p>(512) 471-1211</p>
            <p>Austin, Texas 78705</p>
            <p>pucindia20@gmail.com</p>
          </div>
        </div>
      </div>
      <p>&copy; Projects with Underserved Communities, Team India 2020</p>
    </div>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

  // import statements
  import { BNavbar } from "bootstrap-vue";
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faUserSecret, faInbox, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
  import { faInstagram, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
 
  library.add(faUserSecret, faInstagram, faFacebook, faInbox, faHandHoldingUsd, faYoutube);

  export default{
    components: {
      'b-navbar': BNavbar,
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

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

/* #horizontal-line{
  height: 40px;
  width: 100%;
  background-color: #CC5500;
} */

.footer-images{
  width: 40%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 40px;
}

.footer-images img{
  width: 80%;
}

.footer-info {
  width: 60%;
}

.footer-info .links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.links p {
  width: 40%;
  margin-bottom: 0;
}

.links a {
  width: 40%;
  text-decoration: none;
  color: black;
}

.links a:hover{
  text-decoration: none;
  color: #CC5500;
}

.footer-content{
  width: 70%;
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 50px;
}

.footer {
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
  background-color: #e9e9e9;
}

.main-wrapper {
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
}

.navbar {
  width: 100%;
  padding: none;
  margin: 20px;
  margin-top:8px;
}

.nav-item{
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-align: center;
}

.nav-item .nav-link{
  text-align: center;
  padding: 0;
  letter-spacing: 1px;
}

.nav-item:hover{
  font-weight: bold;
  border-bottom: 2px solid #CC5500;
}

.navbar-collapse {
  height: 100%;
}

.nav-item{
  margin-right: 10px;
  width: 100px;
}

a.nav-link{
  color: black;
}

.navbar-nav {
  background-color: #e9e9e9;
  border-radius: 5px;
}

.navbar-light .navbar-toggler{
  border: none;
}

.navbar-light .navbar-toggler:focus {
  outline: none;
}

.navbar-brand img {
  width: 70px;
  height: 70px;
}

.navbar-brand {
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
}


@media screen and (max-width: 1272px) {
  .nav-item {
    font-size: 0.9em;
    margin-right: 0;
    width: 90px;
  }
}

@media screen and (max-width: 1177px) {
  .nav-item {
    display: none;
  }
}

@media screen and (max-width: 992px){
  .nav-item {
    display: block;
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
  }

  .nav-item:hover{
    border: none;
  }

  .navbar-collapse{
    margin-top: 20px;
    margin-bottom: 20px;
  }
}


.contact{
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
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: fixed;
  right: 0;
  bottom: 20vh;
  margin: 40px;
}

.contact a {
  color: black;
}

.contact a:hover {
  color: #CC5500;
  -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    -webkit-transform: translateY(-3px);
        -ms-transform: translateY(-3px);
            transform: translateY(-3px);
}

.contact svg {
  font-size: 1.4em;
  margin-top: 12px;
  margin-bottom: 12px;
}

#insta {
  font-size: 1.5em;
}

@media screen and (max-width: 870px){

  .navbar-light .navbar-brand{
    letter-spacing: 2px;
    font-size: 0.95em;
  }
}

@media screen and (max-width: 770px){

  .contact{
    margin: 20px;
  }
}

@media screen and (max-width: 690px){

  .navbar-light .navbar-brand{
    letter-spacing: 1px;
    font-size: 0.95em;
  }
}

@media screen and (max-width: 650px){

  .navbar-light .navbar-brand span{
    display: none;
  }

  .navbar-light .navbar-brand img{
    width: 80px;
    height: 80px;
  }
}

.logo {
  width: 40px;
  height: 40px;
}
</style>

