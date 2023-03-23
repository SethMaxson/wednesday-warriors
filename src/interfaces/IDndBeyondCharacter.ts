// Generated by https://quicktype.io

export interface IDNDBeyondCharacter {
    id:         number;
    success:    boolean;
    message:    string;
    data:       IDndBeyondCharacterData;
    pagination: null;
}

export interface IDndBeyondCharacterData {
    id:                         number;
    userId:                     number;
    readonlyUrl:                string;
    avatarUrl:                  string;
    frameAvatarUrl:             null;
    backdropAvatarUrl:          null;
    smallBackdropAvatarUrl:     null;
    largeBackdropAvatarUrl:     null;
    thumbnailBackdropAvatarUrl: null;
    defaultBackdrop:            DefaultBackdrop;
    avatarId:                   number;
    frameAvatarId:              null;
    backdropAvatarId:           null;
    smallBackdropAvatarId:      null;
    largeBackdropAvatarId:      null;
    thumbnailBackdropAvatarId:  null;
    themeColorId:               number;
    themeColor:                 ThemeColor;
    decorations:                Decorations;
    name:                       string;
    socialName:                 null;
    gender:                     string;
    faith:                      null;
    age:                        null;
    hair:                       string;
    eyes:                       null;
    skin:                       string;
    height:                     null;
    weight:                     null;
    inspiration:                boolean;
    baseHitPoints:              number;
    bonusHitPoints:             null;
    overrideHitPoints:          null;
    removedHitPoints:           number;
    temporaryHitPoints:         number;
    currentXp:                  number;
    alignmentId:                null;
    lifestyleId:                number;
    stats:                      Stat[];
    bonusStats:                 Stat[];
    overrideStats:              Stat[];
    background:                 DataBackground;
    race:                       Race;
    raceDefinitionId:           null;
    raceDefinitionTypeId:       null;
    notes:                      Notes;
    traits:                     Traits;
    preferences:                IDndBeyondCharacterPreferences;
    configuration:              IDndBeyondCharacterConfiguration;
    lifestyle:                  null;
    inventory:                  IDndBeyondCharacterInventory[];
    currencies:                 Currencies;
    classes:                    DataClass[];
    feats:                      Feat[];
    customDefenseAdjustments:   any[];
    customSenses:               any[];
    customSpeeds:               any[];
    customProficiencies:        any[];
    spellDefenses:              null;
    customActions:              any[];
    characterValues:            CharacterValue[];
    conditions:                 any[];
    deathSaves:                 DeathSaves;
    adjustmentXp:               null;
    spellSlots:                 PactMagic[];
    pactMagic:                  PactMagic[];
    activeSourceCategories:     number[];
    spells:                     Spells;
    options:                    IDndBeyondCharacterOptions;
    choices:                    Choices;
    actions:                    IDndBeyondCharacterOptions;
    modifiers:                  Modifiers;
    classSpells:                ClassSpell[];
    customItems:                any[];
    campaign:                   Campaign;
    creatures:                  any[];
    optionalOrigins:            OptionalOrigin[];
    optionalClassFeatures:      OptionalClassFeature[];
    dateModified:               string;
    providedFrom:               string;
}

export interface IDndBeyondCharacterOptions {
    race:       any[];
    class:      FeatElement[];
    background: null;
    item:       null;
    feat:       FeatElement[];
}

export interface FeatElement {
    componentId:            number;
    componentTypeId:        number;
    id:                     string;
    entityTypeId:           string;
    limitedUse:             ClassLimitedUse | null;
    name:                   string;
    description:            null | string;
    snippet:                string;
    abilityModifierStatId:  number | null;
    onMissDescription:      null | string;
    saveFailDescription:    null | string;
    saveSuccessDescription: null | string;
    saveStatId:             null;
    fixedSaveDc:            null;
    attackTypeRange:        number | null;
    actionType:             number;
    attackSubtype:          number | null;
    dice:                   Die | null;
    value:                  number | null;
    damageTypeId:           number | null;
    isMartialArts:          boolean;
    isProficient:           boolean;
    spellRangeType:         null;
    displayAsAttack:        boolean | null;
    range:                  FeatRange;
    activation:             Activation;
    numberOfTargets:        null;
    fixedToHit:             null;
    ammunition:             null;
}

export interface Activation {
    activationTime: number | null;
    activationType: number | null;
}

export interface Die {
    diceCount:      number | null;
    diceValue:      number | null;
    diceMultiplier: null;
    fixedValue:     number | null;
    diceString:     null | string;
}

export interface ClassLimitedUse {
    name:                     null;
    statModifierUsesId:       null;
    resetType:                number | null;
    numberUsed:               number;
    minNumberConsumed:        number | null;
    maxNumberConsumed:        number;
    maxUses:                  number;
    operator:                 number | null;
    useProficiencyBonus:      boolean;
    proficiencyBonusOperator: number | null;
    resetDice:                null;
}

export interface FeatRange {
    range:                    number | null;
    longRange:                number | null;
    aoeType:                  null;
    aoeSize:                  null;
    hasAoeSpecialDescription: boolean;
    minimumRange:             null;
}

export interface DataBackground {
    hasCustomBackground: boolean;
    definition:          CharacteristicsBackgroundClass;
    definitionId:        null;
    customBackground:    CustomBackground;
}

export interface CustomBackground {
    id:                                    number;
    entityTypeId:                          number;
    name:                                  string;
    description:                           string;
    featuresBackground:                    CharacteristicsBackgroundClass;
    characteristicsBackground:             CharacteristicsBackgroundClass;
    featuresBackgroundDefinitionId:        null;
    characteristicsBackgroundDefinitionId: null;
    backgroundType:                        number;
}

export interface CharacteristicsBackgroundClass {
    id:                                  number;
    entityTypeId:                        number;
    definitionKey:                       string;
    name:                                string;
    description:                         string;
    snippet:                             string;
    shortDescription:                    string;
    skillProficienciesDescription:       string;
    toolProficienciesDescription:        string;
    languagesDescription:                string;
    equipmentDescription:                string;
    featureName:                         string;
    featureDescription:                  string;
    avatarUrl:                           null;
    largeAvatarUrl:                      null;
    suggestedCharacteristicsDescription: string;
    suggestedProficiencies:              null;
    suggestedLanguages:                  null;
    organization:                        null;
    contractsDescription:                string;
    spellsPreDescription:                string;
    spellsPostDescription:               string;
    personalityTraits:                   Bond[];
    ideals:                              Bond[];
    bonds:                               Bond[];
    flaws:                               Bond[];
    isHomebrew:                          boolean;
    sources:                             Source[];
    spellListIds:                        any[];
    featList:                            FeatList | null;
}

export interface Bond {
    id:          number;
    description: string;
    diceRoll:    number;
}

export interface FeatList {
    id:      number;
    name:    string;
    featIds: number[];
}

export interface Source {
    sourceId:   number;
    pageNumber: number | null;
    sourceType: number;
}

export interface Stat {
    id:    number;
    name:  null;
    value: number | null;
}

export interface Campaign {
    id:          number;
    name:        string;
    description: string;
    link:        string;
    publicNotes: string;
    dmUserId:    number;
    dmUsername:  string;
    characters:  Character[];
}

export interface Character {
    userId:        number;
    username:      string;
    characterId:   number;
    characterName: string;
    characterUrl:  string;
    avatarUrl:     string;
    privacyType:   number;
    campaignId:    null;
    isAssigned:    boolean;
}

export interface CharacterValue {
    typeId:        number;
    value:         string;
    notes:         null;
    valueId:       string;
    valueTypeId:   string;
    contextId:     null;
    contextTypeId: null;
}

export interface Choices {
    race:              ChoicesBackground[];
    class:             ChoicesBackground[];
    background:        ChoicesBackground[];
    item:              null;
    feat:              any[];
    choiceDefinitions: any[];
}

export interface ChoicesBackground {
    componentId:     number;
    componentTypeId: number;
    id:              string;
    parentChoiceId:  null | string;
    type:            number;
    subType:         number | null;
    optionValue:     number;
    label:           null | string;
    isOptional:      boolean;
    isInfinite:      boolean;
    defaultSubtypes: any[];
    displayOrder:    null;
    options:         Option[];
    optionIds:       any[];
}

export interface Option {
    id:          number;
    label:       string;
    description: null;
}

export interface ClassSpell {
    entityTypeId:     number;
    characterClassId: number;
    spells:           Spell[];
}

export interface Spell {
    overrideSaveDc:        null;
    limitedUse:            null;
    id:                    number;
    entityTypeId:          number;
    definition:            SpellDefinition;
    definitionId:          number;
    prepared:              boolean;
    countsAsKnownSpell:    boolean;
    usesSpellSlot:         boolean;
    castAtLevel:           null;
    alwaysPrepared:        boolean;
    restriction:           null;
    spellCastingAbilityId: null;
    displayAsAttack:       null;
    additionalDescription: null;
    castOnlyAsRitual:      boolean;
    ritualCastingType:     null;
    range:                 DefinitionRange;
    activation:            Activation;
    baseLevelAtWill:       boolean;
    atWillLimitedUseLevel: null;
    isSignatureSpell:      null;
    componentId:           number;
    componentTypeId:       number;
    spellListId:           null;
}

export interface SpellDefinition {
    id:                     number;
    name:                   string;
    level:                  number;
    school:                 string;
    duration:               Duration;
    activation:             Activation;
    range:                  DefinitionRange;
    asPartOfWeaponAttack:   boolean;
    description:            string;
    snippet:                string;
    concentration:          boolean;
    ritual:                 boolean;
    rangeArea:              null;
    damageEffect:           null;
    components:             number[];
    componentsDescription:  string;
    saveDcAbilityId:        number | null;
    healing:                null;
    healingDice:            any[];
    tempHpDice:             any[];
    attackType:             number | null;
    canCastAtHigherLevel:   boolean;
    isHomebrew:             boolean;
    version:                null;
    sourceId:               null;
    sourcePageNumber:       number;
    requiresSavingThrow:    boolean;
    requiresAttackRoll:     boolean;
    atHigherLevels:         AtHigherLevels;
    modifiers:              ItemElement[];
    conditions:             Condition[];
    tags:                   string[];
    castingTimeDescription: string;
    scaleType:              ScaleType | null;
    sources:                Source[];
    spellGroups:            any[];
}

export interface AtHigherLevels {
    scaleType:              ScaleType | null;
    higherLevelDefinitions: HigherLevelDefinition[];
    additionalAttacks:      any[];
    additionalTargets:      any[];
    areaOfEffect:           any[];
    duration:               any[];
    creatures:              any[];
    special:                any[];
    points:                 any[];
}

export interface HigherLevelDefinition {
    level:   number;
    typeId:  number;
    dice:    Die | null;
    value:   number | null;
    details: string;
}

export enum ScaleType {
    Characterlevel = "characterlevel",
    Spellscale = "spellscale",
}

export interface Condition {
    type:              number;
    conditionId:       number;
    conditionDuration: number;
    durationUnit:      DurationUnit;
    exception:         string;
}

export enum DurationUnit {
    Hour = "Hour",
    Minute = "Minute",
    Round = "Round",
}

export interface Duration {
    durationInterval: number;
    durationUnit:     DurationUnit | null;
    durationType:     DurationType;
}

export enum DurationType {
    Concentration = "Concentration",
    Instantaneous = "Instantaneous",
    Time = "Time",
}

export interface ItemElement {
    fixedValue:            number | null;
    id:                    string;
    entityId:              number | null;
    entityTypeId:          number | null;
    type:                  string;
    subType:               string;
    dice:                  Die | null;
    restriction:           null | string;
    statId:                number | null;
    requiresAttunement:    boolean;
    duration:              null;
    friendlyTypeName:      string;
    friendlySubtypeName:   string;
    isGranted:             boolean;
    bonusTypes:            any[];
    value:                 number | null;
    availableToMulticlass: boolean | null;
    modifierTypeId:        number;
    modifierSubTypeId:     number;
    componentId:           number;
    componentTypeId:       number;
    die?:                  Die;
    count?:                number;
    durationUnit?:         null;
    usePrimaryStat?:       boolean;
    atHigherLevels?:       AtHigherLevels;
}

export interface DefinitionRange {
    origin:     Origin;
    rangeValue: number;
    aoeType:    null | string;
    aoeValue:   number | null;
}

export enum Origin {
    Ranged = "Ranged",
    Self = "Self",
    Touch = "Touch",
}

export interface DataClass {
    id:                   number;
    entityTypeId:         number;
    level:                number;
    isStartingClass:      boolean;
    hitDiceUsed:          number;
    definitionId:         number;
    subclassDefinitionId: null;
    definition:           SubclassDefinitionClass;
    subclassDefinition:   SubclassDefinitionClass;
    classFeatures:        ClassClassFeature[];
}

export interface ClassClassFeature {
    definition: ClassFeatureDefinition;
    levelScale: LevelScale | null;
}

export interface ClassFeatureDefinition {
    id:                            number;
    definitionKey:                 string;
    entityTypeId:                  number;
    displayOrder:                  number;
    name:                          string;
    description:                   string;
    snippet:                       null | string;
    activation:                    null;
    multiClassDescription?:        string;
    requiredLevel:                 number | null;
    isSubClassFeature?:            boolean;
    limitedUse?:                   LimitedUseElement[];
    hideInBuilder:                 boolean;
    hideInSheet:                   boolean;
    sourceId:                      number | null;
    sourcePageNumber:              number | null;
    creatureRules:                 any[];
    levelScales?:                  LevelScale[];
    infusionRules?:                any[];
    spellListIds:                  any[];
    classId?:                      number;
    featureType:                   number;
    sources:                       Source[];
    affectedFeatureDefinitionKeys: any[];
    entityType:                    EntityType;
    entityID:                      string;
    isCalledOut?:                  boolean;
    entityRaceId?:                 number;
    entityRaceTypeId?:             number;
    displayConfiguration?:         DisplayConfiguration;
}

export interface DisplayConfiguration {
    RACIALTRAIT:  number;
    ABILITYSCORE: number;
    LANGUAGE:     number;
    CLASSFEATURE: number;
}

export enum EntityType {
    ClassFeature = "class-feature",
    RacialTrait = "racial-trait",
}

export interface LevelScale {
    id:          number;
    level:       number;
    description: string;
    dice:        Die;
    fixedValue:  null;
}

export interface LimitedUseElement {
    level: null;
    uses:  number;
}

export interface SubclassDefinitionClass {
    id:                      number;
    name:                    string;
    description:             string;
    equipmentDescription:    null | string;
    parentClassId:           number | null;
    avatarUrl:               null | string;
    largeAvatarUrl:          null | string;
    portraitAvatarUrl:       null | string;
    moreDetailsUrl:          string;
    spellCastingAbilityId:   number | null;
    sourceIds:               any[];
    sources:                 Source[];
    hitDice:                 number;
    classFeatures:           DefinitionClassFeature[];
    classFeatureDefinitions: null;
    wealthDice:              Die | null;
    canCastSpells:           boolean;
    knowsAllSpells:          boolean | null;
    spellPrepareType:        number | null;
    spellContainerName:      null;
    sourceId:                null;
    sourcePageNumber:        number | null;
    subclassDefinition:      null;
    isHomebrew:              boolean;
    primaryAbilities:        number[] | null;
    spellRules:              SpellRules | null;
    prerequisites:           Prerequisite[] | null;
}

export interface DefinitionClassFeature {
    id:            number;
    name:          string;
    prerequisite:  null;
    description:   string;
    requiredLevel: number;
    displayOrder:  number;
}

export interface Prerequisite {
    description:          string;
    prerequisiteMappings: PrerequisiteMapping[];
}

export interface PrerequisiteMapping {
    id:                  number;
    entityId:            number;
    entityTypeId:        number;
    type:                string;
    subType:             string;
    value:               number;
    friendlyTypeName:    string;
    friendlySubTypeName: string;
}

export interface SpellRules {
    multiClassSpellSlotDivisor:  number;
    isRitualSpellCaster:         boolean;
    levelCantripsKnownMaxes:     number[];
    levelSpellKnownMaxes:        number[];
    levelSpellSlots:             Array<number[]>;
    multiClassSpellSlotRounding: number;
}

export interface IDndBeyondCharacterConfiguration {
    startingEquipmentType: number;
    abilityScoreType:      number;
    showHelpText:          boolean;
}

export interface Currencies {
    cp: number;
    sp: number;
    gp: number;
    ep: number;
    pp: number;
}

export interface DeathSaves {
    failCount:    number;
    successCount: number;
    isStabilized: boolean;
}

export interface Decorations {
    avatarUrl:                            string;
    frameAvatarUrl:                       null;
    backdropAvatarUrl:                    null;
    smallBackdropAvatarUrl:               null;
    largeBackdropAvatarUrl:               null;
    thumbnailBackdropAvatarUrl:           null;
    defaultBackdrop:                      DefaultBackdrop;
    avatarId:                             number;
    portraitDecorationKey:                null;
    frameAvatarDecorationKey:             null;
    frameAvatarId:                        null;
    backdropAvatarDecorationKey:          null;
    backdropAvatarId:                     null;
    smallBackdropAvatarDecorationKey:     string;
    smallBackdropAvatarId:                null;
    largeBackdropAvatarDecorationKey:     string;
    largeBackdropAvatarId:                null;
    thumbnailBackdropAvatarDecorationKey: string;
    thumbnailBackdropAvatarId:            null;
    themeColor:                           ThemeColor;
}

export interface DefaultBackdrop {
    backdropAvatarUrl:          string;
    smallBackdropAvatarUrl:     string;
    largeBackdropAvatarUrl:     string;
    thumbnailBackdropAvatarUrl: string;
}

export interface ThemeColor {
    themeColorId:    number;
    themeColor:      string;
    backgroundColor: string;
    name:            string;
    raceId:          null;
    subRaceId:       null;
    classId:         null;
    tags:            string[];
    decorationKey:   string;
}

export interface Feat {
    componentTypeId: null;
    componentId:     null;
    definition:      FeatDefinition;
    definitionId:    number;
}

export interface FeatDefinition {
    id:               number;
    entityTypeId:     number;
    definitionKey:    string;
    name:             string;
    description:      string;
    snippet:          string;
    activation:       Activation;
    sourceId:         null;
    sourcePageNumber: null;
    creatureRules:    any[];
    prerequisites:    Prerequisite[];
    isHomebrew:       boolean;
    sources:          Source[];
    spellListIds:     any[];
}

export interface IDndBeyondCharacterInventory {
    id:                     number;
    entityTypeId:           number;
    definition:             InventoryDefinition;
    definitionId:           number;
    definitionTypeId:       number;
    displayAsAttack:        null;
    quantity:               number;
    isAttuned:              boolean;
    equipped:               boolean;
    equippedEntityTypeId:   number | null;
    equippedEntityId:       number | null;
    chargesUsed:            number;
    limitedUse:             InventoryLimitedUse | null;
    containerEntityId:      number;
    containerEntityTypeId:  number;
    containerDefinitionKey: ContainerDefinitionKey;
    currency:               null;
}

export enum ContainerDefinitionKey {
    The14394935481044862552 = "1439493548:1044862552",
    The14394935481044862559 = "1439493548:1044862559",
    The158111142393985205 = "1581111423:93985205",
}

export interface InventoryDefinition {
    id:                    number;
    baseTypeId:            number;
    entityTypeId:          number;
    definitionKey:         string;
    canEquip:              boolean;
    magic:                 boolean;
    name:                  string;
    snippet:               null | string;
    weight:                number;
    weightMultiplier:      number;
    capacity:              null | string;
    capacityWeight:        number;
    type:                  string;
    description:           string;
    canAttune:             boolean;
    attunementDescription: null | string;
    rarity:                Rarity;
    isHomebrew:            boolean;
    version:               null | string;
    sourceId:              null;
    sourcePageNumber:      null;
    stackable:             boolean;
    bundleSize:            number;
    avatarUrl:             null | string;
    largeAvatarUrl:        null | string;
    filterType:            FilterType;
    cost:                  number | null;
    isPack:                boolean;
    tags:                  string[];
    grantedModifiers:      ItemElement[];
    subType:               SubType | null;
    isConsumable:          boolean;
    weaponBehaviors:       WeaponBehavior[];
    baseItemId:            number | null;
    baseArmorName:         null;
    strengthRequirement:   null;
    armorClass:            null;
    stealthCheck:          null;
    damage:                Die | null;
    damageType:            null | string;
    fixedDamage:           null;
    properties:            Property[] | null;
    attackType:            number | null;
    categoryId:            number | null;
    range:                 number | null;
    longRange:             number | null;
    isMonkWeapon:          boolean;
    levelInfusionGranted:  number | null;
    sources:               Source[];
    armorTypeId:           null;
    gearTypeId:            number | null;
    groupedId:             null;
    canBeAddedToInventory: boolean;
    isContainer:           boolean;
    isCustomItem:          boolean;
}

export enum FilterType {
    OtherGear = "Other Gear",
    Staff = "Staff",
    Weapon = "Weapon",
    WondrousItem = "Wondrous item",
}

export interface Property {
    id:          number;
    name:        string;
    description: string;
    notes:       null | string;
}

export enum Rarity {
    Common = "Common",
    Rare = "Rare",
    Uncommon = "Uncommon",
    VeryRare = "Very Rare",
}

export enum SubType {
    AdventuringGear = "Adventuring Gear",
}

export interface WeaponBehavior {
    baseItemId:   number;
    baseTypeId:   number;
    type:         string;
    attackType:   number;
    categoryId:   number;
    properties:   Property[];
    damage:       Die;
    damageType:   string;
    range:        number;
    longRange:    number;
    isMonkWeapon: boolean;
}

export interface InventoryLimitedUse {
    maxUses:              number;
    numberUsed:           number;
    resetType:            string;
    resetTypeDescription: string;
}

export interface Modifiers {
    race:       ItemElement[];
    class:      ItemElement[];
    background: ItemElement[];
    item:       ItemElement[];
    feat:       ItemElement[];
    condition:  any[];
}

export interface Notes {
    allies:              null;
    personalPossessions: string;
    otherHoldings:       null;
    organizations:       null;
    enemies:             null;
    backstory:           null;
    otherNotes:          string;
}

export interface OptionalClassFeature {
    classFeatureId:                    number;
    affectedClassFeatureId:            null;
    classFeatureDefinitionKey:         string;
    affectedClassFeatureDefinitionKey: null;
}

export interface OptionalOrigin {
    racialTraitId:                    number;
    affectedRacialTraitId:            number;
    racialTraitDefinitionKey:         string;
    affectedRacialTraitDefinitionKey: string;
}

export interface PactMagic {
    level:     number;
    used:      number;
    available: number;
}

export interface IDndBeyondCharacterPreferences {
    useHomebrewContent:          boolean;
    progressionType:             number;
    encumbranceType:             number;
    ignoreCoinWeight:            boolean;
    hitPointType:                number;
    showUnarmedStrike:           boolean;
    showScaledSpells:            boolean;
    primarySense:                number;
    primaryMovement:             number;
    privacyType:                 number;
    sharingType:                 number;
    abilityScoreDisplayType:     number;
    enforceFeatRules:            boolean;
    enforceMulticlassRules:      boolean;
    enableOptionalClassFeatures: boolean;
    enableOptionalOrigins:       boolean;
    enableDarkMode:              boolean;
    enableContainerCurrency:     boolean;
}

export interface Race {
    isSubRace:         boolean;
    baseRaceName:      string;
    entityRaceId:      number;
    entityRaceTypeId:  number;
    fullName:          string;
    baseRaceId:        number;
    baseRaceTypeId:    number;
    description:       string;
    avatarUrl:         null;
    largeAvatarUrl:    null;
    portraitAvatarUrl: string;
    moreDetailsUrl:    string;
    isHomebrew:        boolean;
    sourceIds:         any[];
    groupIds:          number[];
    type:              number;
    supportsSubrace:   null;
    subRaceShortName:  string;
    baseName:          string;
    racialTraits:      RacialTrait[];
    weightSpeeds:      WeightSpeeds;
    featIds:           any[];
    size:              null;
    sizeId:            number;
    sources:           Source[];
}

export interface RacialTrait {
    definition: ClassFeatureDefinition;
}

export interface WeightSpeeds {
    normal:            Normal;
    encumbered:        null;
    heavilyEncumbered: null;
    pushDragLift:      null;
    override:          null;
}

export interface Normal {
    walk:   number;
    fly:    number;
    burrow: number;
    swim:   number;
    climb:  number;
}

export interface Spells {
    race:       Item[];
    class:      SpellsClass[];
    background: null;
    item:       Item[];
    feat:       any[];
}

export interface SpellsClass {
    overrideSaveDc:        null;
    limitedUse:            null;
    id:                    number;
    entityTypeId:          number;
    definition:            SpellDefinition;
    definitionId:          number;
    prepared:              boolean;
    countsAsKnownSpell:    boolean;
    usesSpellSlot:         boolean;
    castAtLevel:           null;
    alwaysPrepared:        boolean;
    restriction:           string;
    spellCastingAbilityId: null;
    displayAsAttack:       null;
    additionalDescription: string;
    castOnlyAsRitual:      boolean;
    ritualCastingType:     null;
    range:                 DefinitionRange;
    activation:            Activation;
    baseLevelAtWill:       boolean;
    atWillLimitedUseLevel: null;
    isSignatureSpell:      null;
    componentId:           number;
    componentTypeId:       number;
    spellListId:           null;
}

export interface Item {
    overrideSaveDc:        number | null;
    limitedUse:            ClassLimitedUse | null;
    id:                    number;
    entityTypeId:          number;
    definition:            SpellDefinition;
    definitionId:          number;
    prepared:              boolean;
    countsAsKnownSpell:    boolean | null;
    usesSpellSlot:         boolean;
    castAtLevel:           null;
    alwaysPrepared:        boolean;
    restriction:           null | string;
    spellCastingAbilityId: number | null;
    displayAsAttack:       boolean | null;
    additionalDescription: null;
    castOnlyAsRitual:      boolean;
    ritualCastingType:     null;
    range:                 DefinitionRange;
    activation:            Activation;
    baseLevelAtWill:       boolean;
    atWillLimitedUseLevel: null;
    isSignatureSpell:      null;
    componentId:           number;
    componentTypeId:       number;
    spellListId:           null;
}

export interface Traits {
    personalityTraits: null;
    ideals:            null;
    bonds:             null;
    flaws:             null;
    appearance:        null;
}