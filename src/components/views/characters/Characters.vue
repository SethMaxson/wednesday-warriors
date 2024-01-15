<script setup lang="ts">
import AcquaintanceCards from "./subviews/AcquaintanceCards.vue";
import AllyCards from "./subviews/AllyCards.vue";
import CrewCards from "./subviews/CrewCards.vue";
import EnemyCards from "./subviews/EnemyCards.vue";
import FrenemyCards from "./subviews/FrenemyCards.vue";
import PartyCards from "./subviews/PartyCards.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
import WikiLink from '@/components/core/WikiLink.vue';
import Location from '@/components/core/text-tags/Location.vue';
</script>

<template>
	<header>
		<ViewBlurb header="Characters">
			Everyone knows a story is only as good as its cast.
		</ViewBlurb>
	</header>
	<main>
		<div class="accordion" id="characters-accordion">

			<AccordionItem name="Main Characters" parent-id="characters-accordion" :default-open="true">
				<PartyCards />
			</AccordionItem>

			<AccordionItem name="Crew" parent-id="characters-accordion">
				<CrewCards />
			</AccordionItem>

			<AccordionItem name="Allies" parent-id="characters-accordion">
				<AllyCards />
			</AccordionItem>

			<AccordionItem name="Frenemies" parent-id="characters-accordion">
				<FrenemyCards />
			</AccordionItem>

			<AccordionItem name="Enemies" parent-id="characters-accordion">
				<EnemyCards />
			</AccordionItem>

			<AccordionItem name="Acquaintances" parent-id="characters-accordion">
				<AcquaintanceCards />
			</AccordionItem>

			<AccordionItem name="Fallen Comrades" parent-id="characters-accordion">
				<CharacterCardDeck>
					<CharacterCard status="dead">
						<template #image>
							<Portrait src="characters/party/wednesday-warriors/dilbert.png" />
						</template>
						<template #heading>Dilbert the Incontinent</template>
						<template #subheading>Human Paladin</template>

						<b>Dilbert the Incontinent</b> is a formidable warrior with a natural tendency towards good-natured altruism. He
						has uncommonly high self-doubt, which may be the only thing hampering his otherwise tactical mind.
						<!-- <template #button><a href="#" class="btn btn-primary">Go somewhere</a></template> -->
					</CharacterCard>
					<CharacterCard>
						<template #image>
							<Portrait src="characters/npc/wednesday-warriors/dave-meowthews.png" />
						</template>
						<template #heading>Dave Meowthews</template>
						<template #subheading>Tabaxi Farmer</template>

						<b>Leaf in the Cyclone</b>, also known as <b>Dave Meowthews</b>, was a middle-aged tabaxi who dreamed of one day becoming a sky-pirate captain.
					</CharacterCard>
				</CharacterCardDeck>
			</AccordionItem>

		</div>
	</main>
</template>
