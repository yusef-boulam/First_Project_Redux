import { useStore } from "react-redux";
import { useEffect, useState } from "react";
import { ownerSlice } from "./ownerSlice";



export const Owner = () => {
    const store = useStore();
    const [owner, setOwner] = useState(store.getState().owner);

    useEffect(() => {
        store.subscribe(() => setOwner(store.getState().owner));
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const firstName = evt.currentTarget.firstName.value;
        store.dispatch(ownerSlice.actions.updateFirstName(firstName));
    }

    return (
        <form onSubmit={handleSubmit} className="OwnerForm">
            <h2>Propriétaire du restaurant</h2>
            {
                owner?.firstName
                    ? <span>Le propriétaire du restaurant est {owner.firstName}</span>
                    : <span>Le propriétaire du restaurant n'est pas encore configuré</span>
            }
            <label>
                Prénom du propriétaire
                <input type="text" name="firstName" />
            </label>
            <button type="submit">configurer le propriétaire</button>
        </form>
    )
};