import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider, FormControl, Input, Button } from "native-base";
import { Link } from 'expo-router';
import { useState } from 'react';
import createUser from '../app/config/redux/actions/createUserAction';
import updateUser from '../app/config/redux/actions/updateUserAction';
import daleteUser from '../app/config/redux/actions/deleteUserAction';
import { useDispatch } from 'react-redux';

const FlatListComp = ({ data, getData }) => {
    const dispatch = useDispatch()
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [button, setButton] = useState("Create");
    const [selected, setSelected] = useState({});



    const handleSubmit = () => {
        if (button == "Create") {
            dispatch(createUser(getData,fullName, email, avatarUrl))
            setFullName("")
            setEmail("")
            setAvatarUrl("")
        } else if (button == "Update") {
            dispatch(updateUser(getData, fullName, email, avatarUrl, selected.id))
            setFullName("")
            setEmail("")
            setAvatarUrl("")
            setButton("Create")
        }

    }

    const deleteItem = (id) => {
        dispatch(daleteUser(id))
        getData()
    }

    const SelectedItem = (item) => {
        setSelected(item);
        setFullName(item.fullName);
        setEmail(item.email);
        setAvatarUrl(item.avatarUrl);
        setButton("Update")
    }

    return <Box>
        <FormControl>
            <FormControl.Label>full Name</FormControl.Label>
            <Input onChangeText={(value) => setFullName(value)} value={fullName} />
        </FormControl>
        <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={(value) => setEmail(value)} value={email} />
        </FormControl>
        <FormControl mt="3">
            <FormControl.Label>URL</FormControl.Label>
            <Input onChangeText={(value) => setAvatarUrl(value)} value={avatarUrl} />
        </FormControl>
        <Button my="5" onPress={handleSubmit}>
            {button}
        </Button>
        <Heading fontSize="xl" p="4" pb="3">
            <Link href="/">Back to Home</Link>
        </Heading>

        <FlatList data={data} renderItem={({
            item
        }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                    <Avatar size="48px" source={{
                        uri: item.avatarUrl
                    }} />
                    <VStack>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold>
                            {item.fullName}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {item.email}
                        </Text>
                        <Button onPress={() => SelectedItem(item)}>Edit</Button>
                        <Button onPress={() => deleteItem(item.id)}>Delete</Button>
                    </VStack>
                    <Spacer />
                </HStack>
            </Box>} keyExtractor={item => item.id} />
    </Box>;
}

export default FlatListComp

const styles = StyleSheet.create({})