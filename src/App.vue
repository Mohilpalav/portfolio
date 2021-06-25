<template>
  <div id="app">
    <NavBar/>
    <Jumbotron />
    <Education />
    <Experience />
    <Skills />
    <Projects />
    <Achievements />
    <Activities />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Jumbotron from './components/Jumbotron.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Achievements from './components/Achievements.vue'
import Activities from './components/Activities.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Jumbotron,
    Education,
    Experience,
    Skills,
    Projects,
    Achievements,
    Activities,
    Footer
  }
}
</script>

<style>

</style>
