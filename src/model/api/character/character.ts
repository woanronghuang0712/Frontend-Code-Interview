
type ElementalType = 'Pyro' | 'Hydro' | 'Cryo' | 'Electro' | 'Anemo' | 'Geo' | 'Dendro';
type ArtifactsAttribute = 'Hp' | 'Hp%' | 'Atk' | 'Atk%' | 'Def' | 'Def%' | 'ElementalMastery' | 'EnergyRecharge' | 'CriticalRate' | 'CriticalDamage' | 'HealingBonus' | 'PhysicalDmgBonus' | 'ElementalDmgBonus';
type Talent = 'NormalAttack' | 'ElementalSkill' | 'ElementalBurst';

interface Character {
    id: number;
    name: string;
    avatar: string;
    elementalType: ElementalType;
    talentEnhanceOrder: (Talent | Talent[])[];
    attributeWeightOrder: ( ArtifactsAttribute | ArtifactsAttribute[])[]
    lastUpTime: string;
}

export default Character;