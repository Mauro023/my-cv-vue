<template>
  <div>
    <div class="container">
      <div class="content">
        <Header />
        <v-app>
          <v-row justify="center">
            <v-col cols="12" sm="11" md="11" lg="11" class="mt-6">
              <v-card>
                <Experience />
                <Projects />
              </v-card>
            </v-col>
          </v-row>
        </v-app>
      </div>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script>
import Header from '@/components/Header.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';

export default {
  components: {
    Header,
    Experience,
    Projects
  },
};
</script>

<style scoped>
.container {
  width: 130vh;
  min-height: 170vh;
  background: linear-gradient(to bottom,
      #4527A0 0%,
      #4527A0 50%,
      #fff 50%,
      #fff 100%);
  color: black;
  border-radius: 12px;
}

.content{
  align-content: center;
}
</style>

<style>
.v-application {
  background-color: transparent !important;
  min-height: fit-content !important;
}

.v-application__wrap {
  min-height: fit-content !important;
}

.container {
  background-color: white;
}
</style>