import HouseRow from "@/components/HouseRow";
import useHouses from "@/hooks/useHouses";
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "@/components/loadingIndicator";


const HouseList = ({selectedHouse}) => {

   const {houses,setHouses,loadingState} = useHouses();

   if (loadingState !== loadingStatus.loaded) {
       return  (
           <LoadingIndicator loadingState={loadingState}/>
       )
   }


    const pk = () => {
        return (
            setHouses(prevState => [...houses,{ id : 8,
                address: "89 Road of Forks, Bern",
                country: "pk",
                price : 500000}])
        )
    }

 return (
     <div>
         <div className="row mb-2">
             <h5 className="themeFontColor text-center">
                 Housed currently on the market
             </h5>
         </div>
         <table className="table table-hover">
             <thead>
             <tr>
                 <th>Address</th>
                 <th>Country</th>
                 <th>Asking Price</th>
             </tr>
             </thead>
             <tbody>
             {houses.map(item => <HouseRow key={item.id} house={item} selectedHouse={selectedHouse} />

             )}
             </tbody>
         </table>
         <button className="btn btn-primary" onClick={pk}>add house</button>
     </div>
 )
}

export default HouseList;




