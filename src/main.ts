import { createApp } from "vue";
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/main.css";
import CharactersVue from "./components/views/characters/Characters.vue";
import DMViewComponent from "./components/views/dm/DM.vue";
import FactionsViewComponent from "./components/views/factions/Factions.vue";
import GapYearViewComponent from "./components/views/gap-year/GapYear.vue";
import InventoryViewComponent from "./components/views/inventory/Inventory.vue";
import JournalViewComponent from "./components/views/journal/Journal.vue";
import LinksViewComponent from "./components/views/links/Links.vue";

// createApp(App).mount("#app");

const router = createRouter({
	history: createWebHashHistory('/wednesday-warriors/'),
	routes:[
		{ path: '/', component: CharactersVue},
		{ path: '/about', component: CharactersVue},
		{ path: '/characters', component: CharactersVue},
		{ path: '/dm', component: DMViewComponent},
		{ path: '/factions', component: FactionsViewComponent},
		{ path: '/gap-year', component: GapYearViewComponent},
		{ path: '/inventory', component: InventoryViewComponent},
		{ path: '/journal', component: JournalViewComponent},
		{ path: '/links', component: LinksViewComponent},
		{ path: '/home', component: CharactersVue}]
});

const app= createApp(App);

app.use(router);

app.mount('#app');
