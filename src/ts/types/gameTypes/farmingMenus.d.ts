declare class FarmingCategoryButtonElement extends HTMLElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    categoryImage: HTMLImageElement;
    categoryName: HTMLDivElement;
    categoryDescription: HTMLDivElement;
    harvestReadyNotice: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCategory(category: FarmingCategory, farming: Farming): void;
    updateNotice(show: boolean): void;
}
declare class FarmingCategoryOptionsElement extends HTMLElement {
    _content: DocumentFragment;
    harvestAllButton: HTMLButtonElement;
    plantAllButton: HTMLButtonElement;
    compostAllButtons: HTMLButtonElement[];
    plantAllSelectedButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setCategory(category: FarmingCategory, game: Game): void;
}
declare class FarmingPlotElement extends HTMLElement {
    _content: DocumentFragment;
    categoryName: HTMLHeadingElement;
    selectSeedDropdownButton: HTMLButtonElement;
    selectSeedDropdownImage: HTMLImageElement;
    selectSeedDropdownOptions: HTMLDivElement;
    plantSeedButton: HTMLButtonElement;
    seedImage: HTMLImageElement;
    growthStatus: HTMLElement;
    compostProgress: HTMLDivElement;
    destroyButton: HTMLButtonElement;
    harvestButton: HTMLButtonElement;
    compostButtonContainer: HTMLUListElement;
    growthChance: HTMLHeadingElement;
    seedQuantities: Map<FarmingRecipe, HTMLSpanElement>;
    compostButtons: HTMLButtonElement[];
    compostTooltips?: TippyTooltip[];
    xpIcon: XPIcon;
    masteryIcon: MasteryXPIcon;
    masteryPoolIcon: MasteryPoolIcon;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    destroyTooltips(): void;
    setPlot(plot: FarmingPlot, game: Game): void;
    updateGrowthChance(plot: FarmingPlot, farming: Farming): void;
    /** Updates the compost level + growth chance */
    updateCompost(plot: FarmingPlot): void;
    updateGrowthTime(plot: FarmingPlot, farming: Farming): void;
    /** Updates the display of the plot */
    updatePlotState(plot: FarmingPlot): void;
    updateSelectedSeed(plot: FarmingPlot): void;
    updateSeedQuantities(farming: Farming): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number): void;
}
declare class LockedFarmingPlotElement extends HTMLElement {
    _content: DocumentFragment;
    farmingLevelRequired: HTMLSpanElement;
    unlockButton: HTMLButtonElement;
    quantityIcons: QtyIcon[];
    iconContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setPlot(plot: FarmingPlot, farming: Farming): void;
    updateQuantities(): void;
    updateRequirements(plot: FarmingPlot, farming: Farming): void;
    updateUnlockButton(plot: FarmingPlot, farming: Farming): void;
}
declare class FarmingSeedSelectElement extends HTMLElement {
    _content: DocumentFragment;
    seedNotice: HTMLElement;
    seedButtonContainer: HTMLDivElement;
    recipeOwnedQuantity: HTMLSpanElement;
    recipeProductQuantity: HTMLSpanElement;
    recipeMastery: MasteryDisplay;
    recipeCategory: HTMLSpanElement;
    recipeLevel: HTMLSpanElement;
    recipeQuantity: HTMLSpanElement;
    recipeInterval: HTMLSpanElement;
    plantButton: HTMLButtonElement;
    xpIcon: XPIcon;
    masteryIcon: MasteryXPIcon;
    masteryPoolIcon: MasteryPoolIcon;
    constructor();
    connectedCallback(): void;
    setSeedSelection(category: FarmingCategory, game: Game, plot?: FarmingPlot): void;
    setSelectedRecipe(recipe: FarmingRecipe, game: Game, plot?: FarmingPlot): void;
    setUnselectedRecipe(): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number): void;
}
