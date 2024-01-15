<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
</script>

<template>
	<CharacterCardDeck>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/cade-brightcloak.png" />
			</template>
			<template #heading>Cade Brightcloak</template>
			<template #subheading>Halfling Cleric</template>

			<b>Cade "Destiny's Child" Brightcloak</b> is a devout adherent of the Cerulean Star.
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/wednesday-warriors/flint-kevanarial.png" />
			</template>
			<template #heading>Flint Kevanarial</template>
			<template #subheading>Dwarf Miner</template>

			<b>Flint Kevanarial</b> is an elderly dwarf who the party recruited in the city of Goldthrone. He grooms his immaculate beard with his own homemade conditioner, which includes guano as a primary ingredient.
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/wednesday-warriors/kenkus.png" />
			</template>
			<template #heading>Kenku</template>
			<template #subheading>Seven Birdbrains</template>

			<b>Seven Kenku</b> joined the crew after the party rescued them from a human trafficking ring.
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/wednesday-warriors/gary-gardener.png" />
			</template>
			<template #heading>Gary Gardener</template>
			<template #subheading>Human Cobbler</template>

			<b>Gary Gardener</b> is a pudgy balding but nice middle-aged man who chose to pursue his dream of piracy a little later in life.
		</CharacterCard>
	</CharacterCardDeck>
</template>
