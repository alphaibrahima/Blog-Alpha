import { useState } from "react";



const List = () => {
    const handleCclick = ()=>{
        console.log('Salut d\'ici debut mars je vais signé un contrat de minimum 1.000.000 fcfa par mois');
    };

    const handleClicAgain = (name, event) => {
        console.log(`Salut, ${name}`, event.target);
    }

    const clickTest = (name)=>{
        console.log(`Me voici M. ${name}`);
    };

    // changer les variable svt nom et age avec les Hook(useState)
    const [nom, setNom] = useState('Duplex');
    const [age, setAge] = useState(25);
    const EventHandle = ()=>{
        setNom('Alpha');
        setAge(27);
    }

    const [diplome, setDiplome] = useState(['informatique ', 'infographie']);
    const diplomeHandle = () => {
        setDiplome(['Reseaux Telecommunication ', ' Multimedia'])
    };
    /*
        quand on appelle la fonction dans le template,
        On ne met les parenthese. par ce que si on les met
        react appelle la foncton sans attendre l'evenement.
    */
    return (
        <div>
            <p>Bienvenue dans notre page...</p>
            <p>Je m'appellle <b>{nom}</b> et mon age est <b>{age}</b></p>
            <p>Et je suis diplomé en <b>{diplome}</b></p>
            <button onClick={handleCclick}>Clicker moi</button>
            <button onClick={(e)=>handleClicAgain('Duplex', e)}>Click Again</button>
            <button onClick={()=>{clickTest('Alpha')}}>click test</button>
            <button onClick={EventHandle}>Event</button>
            <button onClick={diplomeHandle}>Diplôme</button>
        </div>
    );
}
 
export default List;