import { Campaign } from '../../src/types';
import heroes from './heroes';
import dayjs from 'dayjs';

const now = dayjs();

const campaigns: Campaign[] = [
  {
    id: 23123,
    created_at: now.subtract(1, 'hour').toISOString(),
    players_total: 2,
    status: 'Cooking',
    user_id: '1',
    camp_items: [
      {
        id: 1,
        campaign_id: 23123,
        hero: heroes[0],

      },
      {
        id: 2,
        campaign_id: 23123,
        hero: heroes[1],
      },
    ],
  },
  {
    id: 32145,
    created_at: now.subtract(3, 'days').toISOString(),
    players_total: 1,
    status: 'Ending',
    user_id: '1',
    camp_items: [
      {
        id: 1,
        campaign_id: 32145,
        hero: heroes[3],
      },
    ],
  },
  {
    id: 23445,
    created_at: now.subtract(3, 'weeks').toISOString(),
    players_total: 3,
    status: 'Ended',
    user_id: '1',
    camp_items: [
      {
        id: 1,
        campaign_id: 23445,
        hero: heroes[3],
      },
      {
        id: 2,
        campaign_id: 23445,
        hero: heroes[7],
      },
      {
        id: 3,
        campaign_id: 23445,
        hero: heroes[8],
      },
    ],
  },
];

export default campaigns;
