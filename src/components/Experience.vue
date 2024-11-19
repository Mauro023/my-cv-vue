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
                                <v-chip color="primary" variant="flat">
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
                            </v-card-text>
                        </div>
                    </div>
                </div>
            </div>
        </v-row>
    </v-app>
</template>

<script>
export default {
    name: 'Experience',
    data() {
        return {
            experienceItems: [
                { startPeriod: 2021, endPeriod: 2023, company: 'Fundación un mundo igual', job: 'Coordinador de soporte informatico', descriptionJob: 'Soy un apasionado de la informática y un desarrollador Fullstack con experiencia, siempre buscando aprender más y ampliar mis conocimientos en el', location: 'Montería, Colombia' },
                { startPeriod: 2023, endPeriod: 2024, company: 'Clinica CUMI', job: 'Ingeniero de soporte', descriptionJob: 'Soy un apasionado de la informática y un desarrollador Fullstack con experiencia, siempre buscando aprender más y ampliar mis conocimientos en el', location: 'Montería, Colombia' },
            ],
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

.timeline-line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background-color: #74A4D9;
    height: 60%;
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
    background-color: #74A4D9;
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