import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, Platform, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppSelector } from '../../state/hooks/hooks';
import OrganizerCard from '../../components/common/OrganizerCard';
import Color from '../../constants/colors';
import GeneralInfo from '../../components/common/GeneralInfo';
import HikeHeader from '../../components/common/HikeHeader';
import AttendeesCard from '../../components/common/AttendeesCard';
import GasSplitGas from '../../components/common/GasSplitCard';
import AboutCard from '../../components/common/AboutCard';
import PaceCard from '../../components/common/PaceCard';
import JoinCard from '../../components/common/ActionCard';
import { useGetHikeByIdQuery } from '../../state/services/hike.service';
import { useGetMountainByIdQuery } from '../../state/services/mountian.service';
import { useGetRouteByIdQuery } from '../../state/services/routes.service';
import { useGetUserByIdQuery } from '../../state/services/user.service';


const DetailHikeScreen = ({ route, navigation }) => {

    const { hikeId, routeId, mountainId, hostId, attendeesIds } = route.params;

    console.log("route", route.params)

    const { data: selectedHike } = useGetHikeByIdQuery(hikeId)
    const { data: selectedMountain } = useGetMountainByIdQuery(mountainId);
    const { data: selectedRoute } = useGetRouteByIdQuery(routeId);
    // const { data: users } =  useGetUsersByIdQuery();
    const { data: selectedHost } = useGetUserByIdQuery(hostId);
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.screen}>
                    <HikeHeader selectedMountain={selectedMountain}/>
                    {/* <GeneralInfo selectedHike={selectedHike} selectedRoute={selectedRoute}/> */}
                    {/* <OrganizerCard selectedHost={selectedHost} selectedRoute={selectedRoute}/> */}
                    {/* <AttendeesCard users={users} selectedHike={selectedHike}/> */}
                    <GasSplitGas />
                    <AboutCard />
                    <PaceCard />
                </View>
            </ScrollView>
            <JoinCard actionName={"REQUEST TO JOIN HIKE"}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    Screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default  DetailHikeScreen;