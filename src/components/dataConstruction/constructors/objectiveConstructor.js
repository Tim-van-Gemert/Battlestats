import { useEffect } from "react";

const ConstructObjectiveData = (props) => {
    const { APIData, setObjectiveData } = props;
    console.log(APIData)
    const objectiveData = [
        { name: 'Captured', data: APIData.objective.captured },
        { name: 'Neutralized', data: APIData.objective.neutralized },
        { name: 'Defused', data: APIData.objective.defused },
        { name: 'Destroyed', data: APIData.objective.destroyed },
        { name: 'Attacked', data: APIData.objective.time.attacked },
        { name: 'Defended', data: APIData.objective.time.defended }
      ];
      
    const sortedObjectiveData = objectiveData.sort((a, b) => b.data - a.data);

    setObjectiveData(sortedObjectiveData);

};

export default ConstructObjectiveData;
