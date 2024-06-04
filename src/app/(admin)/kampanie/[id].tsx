import CampListItem from "@/components/CampListItem";
import campaigns from "@assets/data/campaigns";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CampaignDetailsScreen() {
    const {id} = useLocalSearchParams();

    const kamp = campaigns.find((o) => o.id.toString() == id);

    if (!kamp) {
        return <Text>Nie mam takiej kampanii</Text>
    }

    return (
        <View>
            <Stack.Screen options={{ title: `Kampania: ${id}`}} />
            <CampListItem campaign={kamp} />
            <Text>Kampania - detale {id}</Text>

            <Text>Tutaj będzie coś więcej o konkrentej kampanii, to co admin doda uznając za słuszne, tylko obecnie szkoda mi dni na przepisywanie notatek z przeszłych kampanii - a nową to zaczniemy po sesji :P </Text>
        </View>
    )
    
}