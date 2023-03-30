<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Location from "@/components/core/text-tags/Location.vue";
import Important from "@/components/core/text-tags/Important.vue";
import Character from "@/components/core/text-tags/Character.vue";
import WikiLink from "@/components/core/WikiLink.vue";
import GapMonth from "./components/GapMonth.vue";
</script>

<template>
	<header>
		<ViewBlurb header="Gap Year">
			How will the gang spend the remaining months before the war?
		</ViewBlurb>
	</header>
	<main>
		<div class="accordion" id="gap-year-accordion">
			<AccordionItem name="Plot Threads" parent-id="gap-year-accordion">
				<div class="list-group">
					<div class="list-group-item">
						<div class="d-flex w-100 justify-content-between">
							<h6 class="mb-1">Impending Invasion of Dilbertland</h6>
							<small>Dilbert</small>
						</div>
						<small>
							Dilbert learned that a charismatic new leader is rallying the people of the wizarding nation of Venland to invade and destroy Dilbertland.
						</small>
					</div>
					<div class="list-group-item">
						<div class="d-flex w-100 justify-content-between">
							<h6 class="mb-1">The Cult and the Vengeful Lord</h6>
							<small>Guidos</small>
						</div>
						<small>
							Guidos learned that he had inadvertently drawn the ire of Lord Cornwallis of the Seventh Citadel, an influential political figure. He also learned that Cornwallis was involved as a middle man in cult activity focused on collecting the sundered fragments of an unknown deity.
						</small>
					</div>
					<div class="list-group-item">
						<div class="d-flex w-100 justify-content-between">
							<h6 class="mb-1">Tarnished Weapon of Heroes</h6>
							<small>Murica</small>
						</div>
						<small>
							After learning that Murica is a lycanthrope, Cade Brightcloak told her of a corrupted artifact that was once wielded by great heroes before it was corrupted by a dark moon mage. He will suggest that that as 'an aspect of the moon,' Murica may be well-suited to purify the artifact if the gang can locate it.
						</small>
					</div>
					<div class="list-group-item">
						<div class="d-flex w-100 justify-content-between">
							<h6 class="mb-1">Standing Invitation</h6>
							<small>All (especially Floopy, Guidos, and Murica)</small>
						</div>
						<small>
							The gang received a formal invitation to visit the Burgerlinde estate. This is the estate of wealthy owner of the talking dog whose birthday party the gang crashed. The gang inadvertently caused mayhem during the birthday party, and lost Teddy during their hasty retreat.
						</small>
					</div>
				</div>
			</AccordionItem>
			<AccordionItem name="Schedule" parent-id="gap-year-accordion" :default-open="true">
				<div class="container border border-2 g-0">
					<!-- <GapMonth month="Month" location="Location" quest-haver="Primary Character" class="bg-info fw-bold d-none d-md-flex">Summary</GapMonth> -->
					<GapMonth month="Month" location="Location" quest-haver="Primary Character" class="bg-info fw-bold">Summary</GapMonth>
					<GapMonth month="0" location="" quest-haver="">
						The <WikiLink>Minotaur</WikiLink> are brought back into existence. Bhazikth announces that they have one year to prepare themselves before his war.
					</GapMonth>
					<GapMonth month="1" location="" quest-haver="" class="bg-info-subtle">
						
					</GapMonth>
					<GapMonth month="2" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="3" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="4" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="5" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="6" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="7" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="8" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="9" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="10" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="11" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="12" location="" quest-haver="">
						
					</GapMonth>
					<GapMonth month="13" location="" quest-haver="">
						<b>War begins.</b>
					</GapMonth>
				</div>
			</AccordionItem>
		</div>
	</main>
</template>
