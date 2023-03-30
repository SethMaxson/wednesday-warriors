<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
</script>

<template>
	<CharacterCardDeck>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/gojiro.png" />
			</template>
			<template #heading>Gojiro</template>
			<template #subheading>Tabaxi Mercenary</template>

			<b>Gojiro</b> is an infamous mercenary known for his martial prowess, stealth, and tracking ability. He seems to have taken a shine to the gang.
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/wednesday-warriors/bhazikth.png" />
			</template>
			<template #heading>Bhazikth</template>
			<template #subheading>Half-Dragon Warlord</template>

			<b>Bhazikth</b> is a feared conquerer known for his cunning, brutality, and rigid personal code. He worked towards resurrecting the Minotaur that his ancestors magically erased so that he could redeem his bloodline by conquering them in more honorable warfare.
		</CharacterCard>
	</CharacterCardDeck>
</template>
