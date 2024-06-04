import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView, Alert} from 'react-native';
import { defaultHeroImage } from '@/components/HeroListItem';
import Colors from '@/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useHero, useInsertHero, useUpdateHero } from '@/app/api/heroes';

const CreateHeroScreen = () => {


    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const [clas, setClas] = useState('');
    const [backstory, setBackstory] = useState('');
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState<string | null> ('');

    const {id: idString} = useLocalSearchParams();
    const id = parseFloat(typeof idString == 'string' ? idString : idString?.[0]);

    const isUpdating = !!id;

    const { mutate: insertHero } = useInsertHero();
    const { mutate: updateHero } = useUpdateHero();
    const {data: updatingHero} = useHero(id);

    const router = useRouter();


    useEffect(() => {
if (updatingHero) {
    setName(updatingHero.name);
    setLevel(updatingHero.level.toString());
    setImage(updatingHero.image);
    setBackstory(updatingHero.backstory);
    setClas(updatingHero.class);

}
    }, [updatingHero])


    //if isUpdating -> wypełnić pola 


    const resetFields = () => {
        setName('');
        setLevel('');
        setClas('');
        setBackstory('');
        setErrors('');
    }

    const onCreate = () => {
        if (!validateInput()) {
            return;
        }
        console.warn('Created a hero!', {name});

        insertHero({name, level: parseInt(level), image, backstory, clas },
        {
            onSuccess: () => {
                resetFields();
                router.back();
            }
        }
    
    
    );

        resetFields();
    }


    const validateInput = () => {
        if(!name) {
            setErrors('Imie jest wymagane!');
            return false;
        }
        if(!level) {
            setErrors('Jaki ma poziom?');
            return false;
        }
        if(!clas) {
            setErrors('Powiedz coś o klasie postaci');
            return false;
        }
        if(!backstory) {
            setErrors('Jaka jest jego historia?');
            return false;
        }
        if (isNaN(parseInt(level))) {
            setErrors('Serio, ale poziom nie jest całkowitą?');
            return false;
        }
        return true;
    }

    const onUpdate = () => {
        if (!validateInput()) {
            return;
        }
        console.warn('Updated a hero!', {name});

        updateHero(
            { id, name, level: parseInt(level), clas, backstory },
            {
            onSuccess: () => {
                resetFields();
                router.back();
            },
        }
        );
    }

    const onSubmit = () => {
        if (isUpdating){
            onUpdate();
        } else {
            onCreate();
        }
    }


    const onDelete = () => {
        console.warn('USUWAMYY!')
    }

    const confirmDelete = () => {
        Alert.alert('Potwierdź', 'Czy na pewno chcesz usunąć te postać?', [
            {
                text: 'Nie',
            },
            {
                text: "Usuń",
                style: 'destructive',
                onPress: onDelete,
            }
        ])
    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        //console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };


    return (
        <ScrollView>
            <Stack.Screen options={{ title: isUpdating ? "Edytuj Postać" : "Dodaj postać"}} />

            <View style={styles.imagecontainer}>
                <Image source={image ? { uri: image } : defaultHeroImage}  style={styles.image} resizeMode="contain" />
            </View>
            <Text onPress={pickImage} style={styles.textButton}>Wybierz obraz</Text>


            <Text style ={styles.label}>Imie</Text>
            <TextInput
                placeholder="Name"
                style={styles.input}
                value={name}
                onChangeText={setName}
              />

            <Text style ={styles.label}>Poziom</Text>
            <TextInput
                placeholder="Level"
                style={styles.input}
                value={level}
                onChangeText={setLevel}
                keyboardType="numeric"
              />
            
            <Text style ={styles.label}>Archetyp</Text>
            <TextInput
                placeholder="Klasa postaci"
                style={styles.input}
                value={clas}
                onChangeText={setClas}
              />


            <Text style ={styles.label}>Backstory</Text>
            <TextInput
                placeholder="Backstory"
                style={styles.bigInput}
                value={backstory}
                onChangeText={setBackstory}
              />

            <Text style = {{ color: 'red'}}>{errors}</Text>

            <Button text={ isUpdating ? "Zatwierdź zmiany" : 'Stwórz postać'} onPress={onCreate} />

            {isUpdating && <Text onPress={confirmDelete} style={styles.textButton}>Usuń postać</Text>}

            <View style={styles.separator}/>



        </ScrollView>
    );
};

export default CreateHeroScreen;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
    },
    label:{
        color: 'gray',
        fontSize: 16,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },
    image: {
        height: 250,
        width: 250,
        borderRadius: 100,
        flex: 1,
    },
    imagecontainer: {
        height: '35%',
        overflow: 'hidden',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 35,
    },
    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
    },
    bigInput: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        //marginBottom: 20,
        height: 120, // Set the height to make it bigger
        textAlignVertical: 'top', // Align text to the top
    },
    separator: {
        marginTop: 30,
        marginBottom: 40,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        height: 1,
        width: '100%',
    },
})