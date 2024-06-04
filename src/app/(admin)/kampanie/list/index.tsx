import { Text, FlatList } from "react-native"
import campaigns from "@assets/data/campaigns"
import CampListItem from "@/components/CampListItem"

export default function CampaignsScreen() {
    // Filtruj kampanie po statusie "Cooking" - czyli trwające :P
    const cookingCampaigns = campaigns.filter(campaign => campaign.status === 'Cooking');

    return(
        <FlatList
            data={cookingCampaigns}
            renderItem={({item}) => <CampListItem campaign={item} />}
            contentContainerStyle={{gap: 10, padding: 10}}
        />
    )
}
