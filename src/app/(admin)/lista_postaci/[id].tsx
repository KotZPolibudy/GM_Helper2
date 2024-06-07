import { Stack, useLocalSearchParams, Link } from 'expo-router';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import heroes from '@assets/data/heroes';
import heroImages from '@assets/heroImages';
import { defaultHeroImage } from '@/components/HeroListItem';
import Button from '@/components/Button';
import { FontAwesome } from '@expo/vector-icons';
import { useHero } from '@/app/api/heroes';
import RemoteImage from '@/components/RemoteImage';

const screenWidth = Dimensions.get('window').width;

const HeroDetailsScreen = () => {
    const { id: idString } = useLocalSearchParams();
    const id = parseFloat(typeof idString == 'string' ? idString : idString[0]);
    const {data: hero, error, isLoading } = useHero(id);
    
    if (!hero) {
        return <Text>Nie udało się załadować postaci z bazy danych</Text>;
    }

    const heroImage = hero.image ? heroImages[hero.image] || defaultHeroImage : defaultHeroImage;


    const addToCampaign = () => {
        console.warn('Adding to campaign - ', hero.name)
    }


    return (
        <View style={styles.pageContainer}>

            <Stack.Screen options={{ 
                title: 'Szczegóły - ' + hero.name,
                headerRight: () => (
            <Link href={`/(admin)/lista_postaci/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ), 
        }} />

        



            
            <View style={styles.container}>
                <RemoteImage 
                path={hero.image}
                fallback = {defaultHeroImage}
                style={styles.image} resizeMode="cover" />
            </View>

            <Text style={styles.name}>{hero.name}</Text>
            <Text style={styles.details}>{hero.class}</Text>
            
            <View style={styles.separator}/>

            <View>
                <Text style={styles.name}>Backstory</Text>
                <Text style={styles.details}>{hero.backstory}</Text>
            </View>
            <Button style={styles.przycisk} text="Dodaj do kampanii" onPress={addToCampaign}/>
        </View>

        


    );
};

export default HeroDetailsScreen;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    level: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.light.tint,
        marginTop: 5,
        textAlign: 'center',
    },
    details: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 5,
        textAlign: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        width: '100%',
    },
    przycisk: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    separator: {
        marginTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        height: 1,
        width: '100%',
        // potencjalnie krótsza linia i na środku?

      },
});
