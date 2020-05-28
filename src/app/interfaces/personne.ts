import { Adresse } from './adresse';

export interface Personne {
    id?: number;
    nom?: string;
    prenom?: string;
    adresses?: Array<Adresse>;
}
