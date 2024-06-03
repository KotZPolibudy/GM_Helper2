export type Hero = {
  id: number;
  image: string | null;
  name: string;
  level: number;
  backstory: string;
  class: string;
};

export type HeroStatus = 'Dead' | 'Alive' | 'Planned' | 'Trudno_Powiedziec';

export type CampaignCartItem = {
  id: string;
  hero: Hero;
  hero_id: number;
  hero_status: HeroStatus
};

export const CampaignStatusList: CampaignStatus[] = [
  'New',
  'Cooking',
  'Ending',
  'Ended',
];

export type CampaignStatus = 'New' | 'Cooking' | 'Ending' | 'Ended';

export type Campaign = {
  id: number;
  created_at: string;
  players_total: number;
  user_id: string;
  status: CampaignStatus;

  camp_items?: CampItem[];
};

export type CampItem = {
  id: number;
  hero: Hero;
  campaign_id: number;
};

export type Profile = {
  id: string;
  group: string;
};


export type Die = {
  id: number,
  image: string,
  name: string,
  range: number,
};