import { Text, FlatList } from "react-native"
import campaigns from "@assets/data/campaigns"
import CampListItem from "@/components/CampListItem"

export default function CampaignsScreen() {
    return(
        <FlatList
        data = {campaigns}
        renderItem={({item}) => <CampListItem campaign={item} />}
        contentContainerStyle={{gap: 10, padding: 10}}
        />
    )
}