import { View, Text,ScrollView } from "react-native";
import React from "react";
import SearBox from "../screenCompoment/SearBox";
import SearContent from "../screenCompoment/SearContent";



const Searh = () => {
    return (

       <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
        <ScrollView>
           <SearBox/>
           <SearContent/>
        </ScrollView>

       </View>
    );
};

export default Searh;
