<template>
  <v-app-bar  class="text-white" :elevation="8">
    <v-row align="center" justify="space-between" class="px-md-16 px-3">
      <v-col cols="auto" class="text-center">
        <v-app-bar-title class="text-h5">
       Mariam
    </v-app-bar-title>
  </v-col>
    <v-col cols="auto" class="d-md-flex d-none text-center">
      <div>
        <v-btn>
          <router-link to="/" class="text-white text-h6"> Home</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/About" class="text-white text-h6"> About</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/Skills" class="text-white text-h6"> Skills</router-link>
        </v-btn>
        <v-btn >
          <router-link to="/Project" class="text-white text-h6"> Projects</router-link>
      </v-btn>
        <v-btn >
          <router-link to="/Contact" class="text-white text-h6"> Contact</router-link>
        </v-btn>
</div>
</v-col>
<v-col class="text-center  d-md-none d-xm-flex" cols="auto">
  <v-menu width="100%" height="50%">
  <template v-slot:activator="{ props }">
    <v-app-bar-nav-icon
      v-bind="props"
    >
    </v-app-bar-nav-icon>
  </template>
  <v-list class="mt-2 text-center text-white">
<v-row class="w-75 mx-auto" align="center" justify="center" >
        <v-col cols="12" >
          <v-btn variant="text" to="Home">
            Home
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn variant="text" to="About">
            About
          </v-btn>
        </v-col>
        <v-col cols="12" >
          <v-btn variant="text" to="Skills">
            Skills
          </v-btn>
        </v-col>
        <v-col cols="12" >
          <v-btn variant="text" to="Project">
            Projects
          </v-btn>
        </v-col>
        <v-col cols="12" >
          <v-btn variant="text" to="Contact">
            Contact
          </v-btn>
        </v-col>
</v-row>
  </v-list>
  </v-menu>
</v-col>
</v-row>
  </v-app-bar>
</template>

<script setup>
  //
</script>
<style>
.v-app-bar ,.v-list {
max-width: 100vw !important;
  background: linear-gradient(to top left,#3c4677,#8458aa ) !important;
  backdrop-filter: blur(18px) !important;
}

a{
  text-decoration: none;
}
</style>
