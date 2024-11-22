<template>
    <v-app>
        <v-row class="pa-4 mt-1">
            <div class="text-left">
                <v-card-title class="text-h5 font-weight-bold">
                    <div class="d-flex align-center custom-title">
                        PROYECTOS
                        <v-divider class="ml-1 border-opacity-25"></v-divider>
                    </div>
                </v-card-title>
                <div v-for="(project, index) in projectsItems" :key="project.company">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div v-if="index % 2 == 0" class="timeline-section align-center">
                            <div class="line-start"></div>
                        </div>
                        <div>
                            <v-card-title class="custom-title">{{ project.company }}</v-card-title>
                            <v-card-text>
                                <p class="custom-p">
                                    {{ project.descriptionJob }}

                                </p>
                            </v-card-text>
                        </div>
                        <div v-if="index % 2 !== 0" class="timeline-section align-center">
                            <div class="line-end"></div>
                        </div>
                    </div>
                </div>
            </div>
        </v-row>
    </v-app>
</template>

<script>

import { projectsItems } from '@/datajs/projectsData.js'

export default {
    name: 'Projects',
    data() {
        return {
            projectsItems: projectsItems
        }
    }
};
</script>

<style scoped>
.custom-title {
    font-size: 15px;
}

.custom-p {
    font-size: 12px;
}

.line-start {
    position: absolute;
    width: 3px;
    margin-left: 20px;
    background-color: #4527A0;
    height: 80%;
    margin-top: 8px;
}

.line-start {
    position: relative;
    align-items: center;
}

.line-end {
    position: absolute;
    width: 3px;
    margin-right: 20px;
    padding-left: 0px;
    background-color: #4527A0;
    height: 80%;
    margin-top: 8px;
}

.line-end {
    position: relative;
    align-items: center;
}
</style>