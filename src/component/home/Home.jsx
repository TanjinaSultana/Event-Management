import Banner from "../banner/Banner";
import CardService from "../card-service/CardService";
import PlanningService from "../planningService/PlanningService";
import Review from "../review/Review";
import Service from "../service/Service";


const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <CardService></CardService>
           <Service></Service>
           <PlanningService></PlanningService>
           <Review></Review>
        </div>
    );
};

export default Home;