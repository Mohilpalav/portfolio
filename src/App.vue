<template>
  <div id="app">
    <NavBar/>
    <Jumbotron />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Achievments />
    <Activities />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Jumbotron from './components/Jumbotron.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Achievments from './components/Achievments.vue'
import Activities from './components/Activities.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Jumbotron,
    Education,
    Experience,
    Projects,
    Skills,
    Achievments,
    Activities,
    Footer
  }
}
</script>

<style>

</style>
