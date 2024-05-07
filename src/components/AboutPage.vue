<template>
    <v-container class="fill-height bg-about" fluid>
      <v-responsive class="align-center fill-height">
      <v-row  align="center" justify="space-between" class="mx-md-7">
        <v-col md="6" cols="12" class="mt-10">
          <p class="text-h6 my-2">My Intro</p>
          <h1 class="text-h2 font-weight-bold text-indigo-lighten-1 my-6">About me</h1>
          <p class="text-h5">Hi,I'm Mariam Rasho ,<span class="text-blue-lighten-3"> FrontEnd Developer</span>, enjoy developing web applications and designing attractive and easy-to-use user interfaces. I can turn creative ideas into great websites. I always strive to develop my skills, learn everything new, and gain knowledge to achieve greater successes in my future career.</p>
          <div class="py-14">
          </div>
          <h1 class="mb-8">Information</h1>
          <v-row align="center"  class=" text-h6">
            <v-col cols="12" md="6" class="text-start">
              <v-icon icon="mdi mdi-account" class="text-indigo-lighten-1 text-align-start"></v-icon>
             Mariam Rasho
            </v-col>
            <v-col cols="12" md="6" class="text-start">
                <v-icon icon="mdi mdi-calendar-range" class="text-indigo-lighten-1"></v-icon>

                1 / 1 / 1999
            </v-col>
            <v-col cols="12" md="6" class="text-start">
          <v-icon icon="mdi mdi-map-marker" class="text-indigo-lighten-1"></v-icon>

                Damascus/Syria
            </v-col>
            <v-col cols="12" md="6" class="text-start">
              <v-icon icon="mdi mdi-phone" class="text-indigo-lighten-1"></v-icon>
               +963 964 632 974
            </v-col>
            <v-col cols="12" md="6" class="text-start">
              <v-icon icon="mdi mdi-email" class="text-indigo-lighten-1"></v-icon>
               rashomariam242@gmail.com
            </v-col>
          </v-row>
        </v-col>
        <v-col md="5" cols="12" class="pa-0">
          <v-img width="100%" src="/images/photo_2024-05-04_12-17-26-removebg-preview.png"/>
        </v-col>
        <v-col md="6" cols="12" class="my-16">
        <h1 class="mb-8">Education</h1>
        <div class="text-h5">
          2016 - 2022
          <div class="mt-4"> Bachelor's degree in <span class="text-indigo-lighten-1">
            Information Technology
              Engineering
          </span>
            <p class="mt-4">Damascus University.</p>
        </div>
        </div>
        </v-col>
        <v-col md="3" cols="12" class="my-16 mx-auto" >
          <h1 class="mb-8">Certification</h1>
          <div class="text-h5">
            3/2023 - 11/2023
            <div class="mt-4"><span class="text-indigo-lighten-1">
              Front End Developer
            </span>
              <p class="mt-4">Al Baraka Association</p>
          </div>
          </div>
          </v-col>
      </v-row>

      </v-responsive>
    </v-container>
  </template>

  <script setup>

  </script>
<style>
.bg-about{
  background-color: rgb(245, 231, 255) !important;

}
</style>