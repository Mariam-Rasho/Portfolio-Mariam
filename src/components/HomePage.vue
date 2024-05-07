<template>
  <v-container class="fill-height bg-image" fluid>
    <v-responsive class="align-center text-center fill-height">
      <h1 class="text-h1 font-weight-medium text-blue-lighten-5" >Mariam Rasho</h1>
      <div class="text-deep-purple-accent-1 text-h3 mt-7">
        <vue-typewriter-effect :strings="['Front End Developer', 'Web Design',]" ></vue-typewriter-effect>
      </div>
      <div class="py-14" />


        <v-row align="center" justify="center">
          <v-col cols="auto">
            <v-btn icon="mdi mdi-linkedin" class="bg-indigo-lighten-1"></v-btn>
          </v-col>

          <v-col cols="auto">
            <v-btn icon="mdi mdi-facebook" class="bg-indigo-lighten-1"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon="mdi mdi-github" class="bg-indigo-lighten-1"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon="mdi mdi-gmail" class="bg-indigo-lighten-1"></v-btn>
          </v-col>
        </v-row>
      <v-col class="mt-16">
            <v-btn rounded="xl" size="large" class="text-blue-lighten-5 bg-indigo-lighten-1 text-h6" @click="downloadCV">mmm</v-btn><a class="text-blue-lighten-5" href="/src/Mariam Rasho(cv).pdf">Download CV</a>
          </v-col>
    </v-responsive>
  </v-container>
</template>

<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
function downloadCV() {
  window.location.href = '/Mariam Rasho(cv).pdf';
      // window.open('/Mariam Rasho(cv).pdf', '_blank'); // فتح الرابط في نافذة جديدة
    }
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
