import Banner from "@/components/banner";
import HouseList from "@/components/houseList";
import {createContext, useCallback, useState} from "react";
import House from "@/components/house";

const App = () => {
    const [selectedHouse,setSelectedHouse] = useState();


    const setSelectHouseWrapper = (house) => {
        setSelectedHouse(prevState => house)
    }

    return  (
        <>
            <Banner>Providing houses all over the world</Banner>
            {
                selectedHouse ? (
                    <House house={selectedHouse}  />
                ) : (
                    <HouseList selectedHouse={setSelectHouseWrapper}/>
                )
            }


        </>
    )

}
export default App;

