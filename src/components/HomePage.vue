<template>
  <v-container class="fill-height bg-image" fluid >
    <v-responsive class="align-center text-center fill-height" data-aos="zoom-in" data-aos-duration="2000">
      <h1 class="text-md-h1 font-weight-medium text-blue-lighten-5" data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-offset="200"
      data-aos-easing="ease-in-out">Mariam Rasho</h1>
      <div class="text-deep-purple-accent-1 text-h3 mt-7">
        <vue-typewriter-effect :strings="['Front End Developer', 'Web Design',]" ></vue-typewriter-effect>
      </div>

      <v-row  align="center" justify="center"  class="mt-16 pt-16"   data-aos="fade-up"  data-aos-duration="4000">
          <v-col cols="auto">
            <v-btn icon="mdi mdi-linkedin" class="bg-indigo-lighten-1"
          href="https://www.linkedin.com/in/mariam-rasho-4388241b5/" ></v-btn>
          </v-col>

          <v-col cols="auto">
            <v-btn icon="mdi mdi-facebook" class="bg-indigo-lighten-1" data-aos="zoom-in"
            data-aos-duration="4000" href="https://www.facebook.com/mariam.rasho"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon="mdi mdi-github" class="bg-indigo-lighten-1" data-aos="zoom-in"
            data-aos-duration="4000" href="https://github.com/Mariam-Rasho/"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon="mdi mdi-gmail" class="bg-indigo-lighten-1" data-aos="zoom-in"
            data-aos-duration="4000" href="mailto:rashomariam242@gmail.com"></v-btn>
          </v-col>
        </v-row>
      <v-col class="mt-16">
            <v-btn rounded="xl" size="large" class="text-blue-lighten-5 bg-indigo-lighten-1 text-h6" href="/Mariam Rasho(cv).pdf" >Download CV</v-btn>
          </v-col>
    </v-responsive>
  </v-container>
</template>

<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
</script>
<style>

.bg-image{
background-image: url('/images/photo_2024-05-04_12-16-52.jpg');
background-attachment: fixed;
background-size: cover;
background-position: center;
opacity: 0.9;
}

</style>
