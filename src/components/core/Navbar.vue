<script setup lang="ts">
import ColorModeToggle from "./ColorModeToggle.vue";
defineProps<{
	activePage?: string;
}>();
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<!-- <div class="container-fluid"> -->
		<div class="container">
			<router-link class="navbar-brand" to="/"> Wednesday Warriors </router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
				aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarToggler">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" to="/home"> Home </router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/characters"> Characters </router-link>
					</li>
					<!-- <li class="nav-item">
						<router-link class="nav-link" to="/inventory"> Inventory </router-link>
					</li> -->
					<li class="nav-item">
						<router-link class="nav-link" to="/journal"> Journal </router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/factions"> Factions </router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/links"> External Links </router-link>
					</li>
					<!-- <ColorModeToggle /> -->
					<!-- <li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li> -->
				</ul>
				<!-- <form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form> -->
			</div>
		</div>
	</nav>
</template>