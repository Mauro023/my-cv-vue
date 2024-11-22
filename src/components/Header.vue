<template>
    <v-app>
        <v-row justify="center">
            <v-col cols="12" sm="11" md="11" lg="11" class="mt-6">
                <v-card>
                    <v-row class="pa-4 pb-0">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div class="text-left">
                                <v-card-title class="text-h5">
                                    <strong>¡Hola! yo soy <br>Mauricio Camargo</strong>
                                </v-card-title>
                                <v-card-subtitle>
                                    <v-chip color="deep-purple-darken-3" variant="flat">
                                        Desarrollador ∼ Ingeniero de sistemas
                                    </v-chip>
                                </v-card-subtitle>
                            </div>
                            <div class="text-left">
                                <div class="contact-grid">
                                    <v-list-item v-for="contact in contactItems" :key="contact.text"
                                        :href="contact.link" :target="contact.link ? '_blank' : ''" density="compact"
                                        :style="{ '--hover-color': contact.color }">
                                        <v-list-item-title class="d-flex align-center custom-contact"> <v-icon
                                                :color="contact.color">{{ contact.icon }}</v-icon> {{ contact.text
                                            }}</v-list-item-title>
                                    </v-list-item>
                                </div>
                            </div>
                        </div>
                    </v-row>
                    <v-row class="pa-4 pt-0 mt-0">
                        <v-col cols="6" sm="6" md="6" lg="6" class="mt-5">
                            <div class="text-left quien">
                                <v-card-title class="text-h5 font-weight-bold">
                                    <div class="d-flex align-center custom-title">
                                        ¿QUIÉN SOY?
                                        <v-divider class="ml-1 border-opacity-25"></v-divider>
                                    </div>
                                </v-card-title>

                                <v-card-text>
                                    <p class="custom-p">
                                        Soy un apasionado de la informática y un desarrollador Fullstack con
                                        experiencia, siempre buscando aprender más y ampliar mis conocimientos en el
                                        mundo del desarrollo web y la programación. Me especializo en crear soluciones
                                        eficientes y escalables, con habilidades tanto en el frontend como en el
                                        backend. Mi enfoque está en mejorar continuamente y adoptar nuevas tecnologías
                                        que optimicen y modernicen los proyectos en los que trabajo. Mi curiosidad y
                                        compromiso con la excelencia me impulsan a enfrentar nuevos desafíos y a seguir
                                        creciendo como profesional.
                                    </p>
                                </v-card-text>
                            </div>
                        </v-col>
                        <v-col cols="6" sm="6" md="6" lg="6" class="mt-5">
                            <div class="text-left">
                                <v-card-title class="text-h5 font-weight-bold">
                                    <div class="d-flex align-center custom-title">
                                        HABILIDADES
                                        <v-divider class="ml-1 border-opacity-25"></v-divider>
                                    </div>
                                </v-card-title>

                                <v-card-text class="custom-p">
                                    <div class="d-flex align-center">
                                        <span>Lenguajes: </span>
                                        <span v-for="language in languagesItems" :key="language.text">
                                            <v-tooltip :text="language.text">
                                                <template v-slot:activator="{ props }">
                                                    <img :src="language.icon" v-bind="props" class="icon ml-2" :width="24"
                                                        :height="24" />
                                                </template>
                                            </v-tooltip>
                                        </span>
                                    </div>
                                    <div class="d-flex align-center mt-2">
                                        <span>Teconologias: </span>
                                        <span v-for="tecnology in tecnologyItems" :key="tecnology.text">
                                            <v-tooltip :text="tecnology.text">
                                                <template v-slot:activator="{ props }">
                                                    <img :src="tecnology.icon" v-bind="props" class="icon ml-2" :width="24"
                                                        :height="24" />
                                                </template>
                                            </v-tooltip>
                                        </span>
                                    </div>
                                    <div class="d-flex align-center mt-2">
                                        <span>Base de datos: </span>
                                        <span v-for="bd in bdItems" :key="bd.text">
                                            <v-tooltip :text="bd.text">
                                                <template v-slot:activator="{ props }">
                                                    <img :src="bd.icon" v-bind="props" class="icon ml-2" :width="24"
                                                        :height="24" />
                                                </template>
                                            </v-tooltip>
                                        </span>
                                    </div>
                                </v-card-text>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>

import { contactItems, tecnologyItems, languagesItems, bdItems } from '@/datajs/headerData.js'

export default {
    name: 'Header',
    data() {
        return {
            contactItems: contactItems,
            tecnologyItems: tecnologyItems,
            languagesItems: languagesItems,
            bdItems: bdItems,
        }
    },
    methods: {
        getPunctuation(index, array) {
            return index === array.length - 1 ? '.' : ', ';
        }
    }
};
</script>

<style scoped>
.contact-grid {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, auto);
    gap: 8px;
    padding: 16px;
    font-size: 10px;
    color: #5a5959;
}

.v-list-item:hover {
    color: var(--hover-color) !important;
}

.custom-contact {
    font-size: 12px;
}

.custom-contact .v-icon {
    margin-right: 5px;
}

.custom-title {
    font-size: 15px;
}

.custom-p {
    font-size: 12px;
}
</style>