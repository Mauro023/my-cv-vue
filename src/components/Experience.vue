<template>
    <v-app>
        <v-row class="pa-4">
            <div class="text-left">
                <v-card-title class="text-h5 font-weight-bold">
                    <div class="d-flex align-center custom-title">
                        EXPERIENCIA
                        <v-divider class="ml-1 border-opacity-25"></v-divider>
                    </div>
                </v-card-title>
                <div v-for="experience in experienceItems" :key="experience.company">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div class="timeline-section align-center">
                            <v-card-subtitle>
                                <v-chip color="deep-purple-darken-3" variant="flat">
                                    {{ experience.startPeriod }} - {{ experience.endPeriod }}
                                </v-chip>
                            </v-card-subtitle>
                            <div class="timeline-line">
                                <div class="timeline-dot top"></div>
                                <div class="timeline-dot bottom"></div>
                            </div>
                        </div>
                        <div>
                            <v-card-title class="custom-title">{{ experience.company }}</v-card-title>
                            <v-card-subtitle>{{ experience.job }} | {{ experience.location
                                }}</v-card-subtitle>

                            <v-card-text>
                                <p class="custom-p">
                                    {{ experience.descriptionJob }}

                                </p>
                                <br>
                                Tecnologias utilizadas:
                                <span class="custom-p" v-for="(technology, index) in experience.technology"
                                    :key="technology">
                                    <v-tooltip :text="technology">
                                        <template v-slot:activator="{ props }">
                                            <img :src=" getTechnologyIcon(technology)" v-bind="props" class="icon ml-2" :width="24"
                                                :height="24" />
                                        </template>
                                    </v-tooltip>
                                    {{ getPunctuation(index, experience.technology) }}
                                </span>
                            </v-card-text>
                        </div>
                    </div>
                </div>
            </div>
        </v-row>
    </v-app>
</template>

<script>

import { experienceItems } from '@/datajs/experienceData.js'

export default {
    name: 'Experience',
    data() {
        return {
            experienceItems: experienceItems,
        }
    },
    methods: {
        getPunctuation(index, array) {
            return index === array.length - 1 ? ' ' : ' / ';
        },
        getTechnologyIcon(technology) {
            const technologyLower = technology.replace(/\s+/g, '').toLowerCase();
            try {
                return new URL(`../assets/icons/${technologyLower}/${technologyLower}-original.svg`, import.meta.url).href
            } catch (error) {
                console.warn(`No se encontró ícono para: ${technology}`);
                return null;
            }
        }
    },
};
</script>

<style scoped>
.custom-title {
    font-size: 15px;
}

.custom-p {
    font-size: 12px;
}

.timeline-line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background-color: #4527A0;
    height: 72%;
    margin-top: 8px;
}

.timeline-line {
    position: relative;
    align-items: center;
}

.timeline-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #4527A0;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
}

.timeline-dot.top {
    top: -4px;
}

.timeline-dot.bottom {
    bottom: -4px;
}
</style>